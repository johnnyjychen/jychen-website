import React from 'react';
import background from '../images/greenjob/green-background.png';

const GreenJob = () => {
    return (
        <div className="project-container">
            <div className="project-section">
                <h1>Sustainability Career and Job Satisfaction in Michigan</h1>
            </div>

            <div className="project-section">
                <h2>Project Information</h2>
                <ul>
                    <li><span className='highlight-green'>Overview</span>: In this project, </li>
                    <li><span className='highlight-green'>Skills</span>: Quantitative Research, R (Programming Language)</li>
                    <li><span className='highlight-green'>Duration</span>: 04/2025</li>
                    <li><span className='highlight-green'>Type</span>: This is an individual project.</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>Background</h2>
                <div className="three-column-section">
                    <div className="image-column">
                        <img src={background} alt="An image for background" />
                    </div>
                    <div className="text-columns">
                        <p>As sustainability becomes central to global economic development, demand for “green jobs” is rising across fields like finance, food, and energy. Understanding what influences job satisfaction and career outcomes in these professions is increasingly important. 
                            Although sustainability roles are gaining value globally (Singh, 2023), their appeal may vary by factors such as salary, job tenure, and generation. Younger and older professionals may prioritize different job aspects, potentially affecting how salary relates to satisfaction. 
                            Despite growing interest in green careers, little is known about how these professions compare in salary, job length, and satisfaction. Exploring these differences can inform career guidance and workforce planning in the sustainability sector.</p>
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Research Questions</h2>
                <p>I came up with two research questions (RQs):</p>
                <p className='indent'>RQ1: Do different generations (younger and older adults) moderate the relationship between salary and job satisfaction, and is the relationship between sustainability professions (finance and food) and job satisfaction mediated by job length?</p>
                <p className='indent'>RQ2: Do individuals in different sustainability professions (finance, food, and energy) differ in their salary, job length, and job satisfaction, and can these variables be used to predict their professions?</p>

            </div>

            <div className="project-section">
                <h2>Analysis Plans at a Conceptual Level</h2>
                <p>For the first research question, regression assumptions will be checked: outliers (standardized residuals &lt; |3|), influential cases (Cook's distance &lt; 1), multicollinearity (VIFs &lt; 10), normality (histogram of standardized residuals), independence (Durbin-Watson test), and homoscedasticity (plot of residuals vs. predicted values). If all assumptions are met, a moderation analysis will be conducted using salary as the independent variable, generation as the moderator, and job satisfaction as the outcome, using the PROCESS macro in R. If moderation is significant, a simple slopes analysis and plots will examine the salary-satisfaction link by generation. A mediation analysis with 10,000 bootstrap samples will also test whether salary or job length mediates the relationship between profession and satisfaction.</p>
                
                <p>For the second question, MANOVA assumptions, interval-level data, independence, multivariate normality, and homogeneity of covariance, will be tested. If satisfied, a MANOVA will assess group differences in salary, job length, and satisfaction by profession. Significant results will be followed by ANOVAs for each outcome and a discriminant function analysis (DFA) to evaluate classification accuracy by profession.</p>
            </div>

            <div className="project-section">
                <h2>Methods</h2>
                <p>For analytic purposes, generation was dummy coded (0 = younger adults, 1 = older adults) to facilitate the moderation analysis, and profession was dummy coded (0 = finance, 1 = food) for the mediation analysis. Participants from the energy profession were excluded from the mediation analysis.</p>
            </div>

            <div className="project-section">
                <h2>Results</h2>
                <h3>Moderation and Mediation Analysis</h3>
                <p>Before running the moderation analysis, regression assumptions were checked. Standardized residuals were between -2.32 and 2.02, and Cook's distance values were all below 1, which shows that there were no outliers or influential cases. VIFs were 1.00 for all predictors, indicating no multicollinearity. The histogram of standardized residuals was approximately normal, showing a bell-shaped pattern without major skew or multiple peaks. The Durbin-Watson test indicated no evidence of autocorrelation among residuals (D-W = 2.10, p = 0.518), so the assumption of independent observations was satisfied. The residuals vs. fitted plot showed no strong patterns, so the assumption of homoscedasticity was considered met. Overall, the residual assumptions were satisfied. Next, the moderation analysis was conducted using Model 1 of the R PROCESS macro to examine whether generation moderates the relationship between salary and job satisfaction. Data from 193 participants were included in the analysis. Salary was entered as the independent variable, generation as the moderator, and job satisfaction as the dependent variable. Both predictors were mean-centered before the analysis. The overall model was significant, F(3, 189) = 10.81, p &lt;0.001, explaining approximately 14.6% of the variance in job satisfaction (R2 = 0.1464). Salary was a significant positive predictor of job satisfaction, b = 0.34, SE = 0.06, t = 5.45, p &lt;0.001, which indicates that higher salaries were associated with greater job satisfaction. However, generation was not a significant predictor, b = 2.71, p = 0.35, and the interaction between salary and generation was not significant, b = -0.04, p = 0.77. These results suggest that the effect of salary on job satisfaction does not differ by generation, indicating that generation does not moderate the relationship between salary and job satisfaction. Because the interaction was not significant, the simple slope analysis and the simple slope plot were not included, as there was no indication of meaningful differences in the relationship between salary and job satisfaction across generations.</p>
                <p>A mediation analysis was conducted using Model 4 of the R PROCESS macro to examine whether job length mediated the relationship between sustainability profession (finance vs. food) and job satisfaction. The analysis included 124 participants working in either finance or food. Job length was entered as the mediator, profession as the predictor, and job satisfaction as the outcome. The total effect of profession on job satisfaction was not significant, b = -6.03, SE = 3.84, t = -1.57, p = 0.12. After controlling for job length, the direct effect of profession on satisfaction remained nonsignificant, b = -5.79, SE = 3.37, t = -1.72, p = 0.09. While job length significantly predicted satisfaction (b = 0.16, SE = 0.03, p &lt;0.001), professions did not significantly predict job length (b = -1.51, SE = 11.86, p = 0.90). The indirect effect of profession on satisfaction through job length was not significant, b = -0.24, 95% CI [-3.95, 3.43], as the confidence interval included zero. These results suggest that job length does not mediate the relationship between profession and job satisfaction.</p>
            
                <h3>MANOVA and DFA</h3>
                <p>Before running the MANOVA, I checked four key assumptions, including interval-level measurement, independence of observations, multivariate normality, and homogeneity of covariance matrices. All dependent variables were measured on interval or ratio scales, so the assumption of interval-level measurement was met. The assumption of independence was satisfied, as each participant contributed only one response and no data were repeated. Salary and job length had similar means and variability across finance, food, and energy professions. For salary, the group means ranged from 54.50K to 58.02K (SDs: 23.02 to 25.53), and for job length, the means ranged from 104.99 to 112.81 months (SDs: 65.12 to 66.66). Job satisfaction showed greater group differences, with means ranging from 44.21 to 68.87 (SDs: 13.29 to 24.02). Histograms for each dependent variable within each group showed minor deviations from normality, including slight positive skewness for job length and job satisfaction, and a multimodal salary distribution in the food group. Covariance and correlation matrices were also examined and found to be similar across groups. Salary and length correlations ranged from r = 0.36 to 0.48, and salary and satisfaction correlations ranged from r = 0.34 to 0.56 across groups. Therefore, the assumptions of multivariate normality and homogeneity of covariance matrices were considered sufficiently met for conducting MANOVA.</p>
                <p>A MANOVA was conducted to examine whether individuals in different sustainability-related professions differed in their salary, job length, and job satisfaction. The multivariate effect of profession was statistically significant across all four test statistics: Pillai's Trace = 0.295, F(6, 378) = 10.91, p &lt;0.001; Wilks' Lambda = 0.706, F(6, 376) = 11.93, p &lt;0.001; Hotelling's Trace = 0.416, F(6, 374) = 12.96, p &lt;0.001; and Roy's Largest Root = 0.413, F(3, 189) = 26.00, p &lt;0.001. These results suggest that the three professions differ significantly on at least one of the dependent variables. Follow-up univariate ANOVAs showed that job satisfaction differed significantly across professions, F(2, 190) = 32.2, p &lt;0.001. However, no significant group differences were found for salary, F(2, 190) = 0.45, p = 0.64, or job length, F(2, 190) = 0.27, p = 0.76. These results suggest that differences in job satisfaction account for the multivariate effect observed in the MANOVA. Follow-up Tukey's HSD tests indicated that individuals in the energy profession reported significantly higher job satisfaction than those in finance (mean difference = 18.63, p &lt;0.001, 95% CI [10.58, 26.67]) and food professions (mean difference = 24.66, p &lt;0.001, 95% CI [17.14, 32.17]). However, there was no significant difference in job satisfaction between the finance and food (mean difference = -6.03, p = 0.18, 95% CI [-14.05, 1.99]).</p>
                <p>Before conducting the DFA, I further checked the multicollinearity. The correlations among the predictors (salary, job length, and job satisfaction) were moderate and below 0.40. Therefore, the data were appropriate for DFA. A DFA was then conducted to determine whether salary, job length, and job satisfaction could accurately classify individuals into one of three sustainability professions. The analysis yielded two discriminant functions. The first function accounted for 99.26% of the between-group variance, while the second explained only 0.74%. Job satisfaction was the strongest predictor in the first discriminant function, meaning it played the biggest role in telling the professions apart. In comparison, salary and job length didn't help much in distinguishing between the groups. The overall model correctly classified about 58.5% of the participants. It did a good job identifying people in the food (78.6%) and energy (81.2%) professions, but did very poorly with the finance group, only getting 3.7% right. These results suggest that while job satisfaction is a key variable in distinguishing professions, identifying individuals in finance roles may not be sufficient.</p>
            </div>

            <div className="project-section">
                <h2>Discussion</h2>
                <p>In this study, I looked at how salary, job length, and professions are related to job satisfaction among sustainability workers in Michigan. First, the moderation analysis showed that salary was associated with higher job satisfaction, but this relationship was similar for both younger and older adults. Therefore, people tended to be more satisfied with their jobs if they earned more money, regardless of the generation. The mediation analysis showed that job length didn't explain the relationship between profession and satisfaction, which suggests that the longer job length in finance or food professions didn't have an impact on how satisfied people were with their jobs. A MANOVA showed significant overall differences between professions, primarily due to higher job satisfaction reported by individuals in the energy profession compared to those in finance and food. Salary and job length didn't differ between professions. Finally, DFA results showed that salary, job length, and satisfaction could moderately predict profession, with job satisfaction being the most influential factor. Individuals in the food and energy professions were classified with higher accuracy, but classification for the finance profession remained poor. This suggests that job satisfaction alone may not be sufficient to clearly distinguish individuals in finance roles.</p>

                <p>There are several limitations to be concerned about. Although assumption checks were generally satisfactory, minor deviations from normality were observed in the residuals, which could slightly influence model estimates. The moderation analysis used a binary moderator (generation), which may have limited the ability to detect more continuous age-related effects on the relationship between salary and job satisfaction. In the mediation analysis, only finance and food professions were included, excluding individuals in the energy profession. It is possible that job length plays a different role in other sustainability professions. Moreover, I only looked at three professions, and the finance group was especially hard to predict in the DFA, meaning other factors beyond salary, job length, and satisfaction might be important. In the future, it would be helpful to include more types of professions. Adding variables like passion for sustainability, workplace support, or education level could give a clearer picture of what drives satisfaction and career differences in sustainability fields.</p>
            </div>

        </div>
    );
}

export default GreenJob;
