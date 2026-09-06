import { useEffect, useRef } from 'react';

const CursorHalo = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationFrame;

    const interactiveSelector =
      'a, button, .clickable, input, select, textarea, label';

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.opacity = '1';
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      if (!(target instanceof Element)) return;

      const interactiveElement = target.closest(interactiveSelector);

      if (interactiveElement) {
        cursor.classList.add('is-hovering');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const relatedTarget = e.relatedTarget;

      if (!(target instanceof Element)) return;

      const leavingInteractive = target.closest(interactiveSelector);

      const enteringInteractive =
        relatedTarget instanceof Element
          ? relatedTarget.closest(interactiveSelector)
          : null;

      if (leavingInteractive && !enteringInteractive) {
        cursor.classList.remove('is-hovering');
      }
    };

    // 新增：点击交互元素时，立即解除 hover
    const handlePointerDown = (e) => {
      const target = e.target;

      if (!(target instanceof Element)) return;

      const interactiveElement = target.closest(interactiveSelector);

      if (interactiveElement) {
        cursor.classList.remove('is-hovering');
      }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursor.classList.remove('is-hovering');
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.45;
      cursorY += (mouseY - cursorY) * 0.45;

      cursor.style.transform =
        `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // 新增
    document.addEventListener('pointerdown', handlePointerDown);

    document.documentElement.addEventListener(
      'mouseleave',
      handleMouseLeave
    );

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);

      // 新增
      document.removeEventListener('pointerdown', handlePointerDown);

      document.documentElement.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <span className="custom-cursor-dot" />
    </div>
  );
};

export default CursorHalo;