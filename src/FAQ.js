import React, {Component} from 'react';
import Question from './Question';
import {withStyles, fade} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const styles = {
    title:{
        display: "wrap",
        fontFamily: "Mulish",
        fontSize: "3rem",
        justifyContent: "center",
        padding: "5px",
        margin: "auto"
    },
    border: {
        backgroundColor: "white",
        width: "95%",
        margin: "auto",
        padding: "50px 0",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
        borderRadius: "50px",
    }      
}

class FAQ extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionText:
            [
                "Understanding Mental Illness",
                "Understanding Emotions",
               "Dealing with the Pandemic",
                "Healthy Habits"
            ],
            topic:
            [
                [   //UMI
                    "Signs/Symptoms",
                    "Causes",
                    "Solutions"
                ],
                [   //UE
                    "Depression", 
                    "Anxiety", 
                    "Stress",
                    "Anger",
                    "Bipolar Disorder",
                    "Eating Disorder"
                ],
                [   //DWTP
                    "Introduction",
                    "Healthy Practices"
                ],
                [   //HH
                    "Maintain a Healthy Diet", 
                    "Stick to a Sleeping Schedule",
                    "Keep in Touch",
                    "Stay On the Move",
                    "Mind-setting"
                ]
            ],
            answers:
            [
                [
                <ul> {/*UMI Signs/Symptoms*/}
                    <li>Confused thinking or problems concentrating</li>
                    <li>Long-term sadness or irritability</li>
                    <li>Extreme mood changes</li>
                    <li>Excessive fear or anxiety</li>
                    <li>Drastic changes in eating or sleeping habits</li>
                    <li>Feeling tired and low of energy</li>
                    <li>Suicidal thoughts</li>
                    <li>Delusions or halucinations</li>
                    <li>Concern of appearance</li>
                </ul>,
                <p> {/*UMI Causes*/}
                    A mix of genetic, biological, 
                    psycho-social and environmental factors can induce mental illness. 
                    Mental illness can run in the family since genetics plays a role 
                    in the development of mental health disorder. 
                    If a relative struggled with a disorder, 
                    then that person’s genes may adapt genetic codes that 
                    make them experience mental health disorder such as depression and anxiety.
                </p>,
                <ul> {/*UMI Solutions/Exercises*/}
                    <li>Get plenty of sleep/rest</li>
                    <li>Use stress ball or other stress reliever</li>
                    <li>Conduct any act of kindess</li>
                    <li>Frequently exercise</li>
                    <li>Do deep breathing exercises</li>
                    <li>Yoga</li>
                    <li>Relax in a warm bath</li>
                    <li>Spend some time with dogs</li>
                    <li>Be brave to experiment new things</li>
                    <li>Learn to let go of small things</li>
                    <li>Be brave to experiment new things</li>
                    <li>Learn to let go of small things</li>
                </ul>,
                ], 
                [
                <p> {/*UE About Depression*/}
                    Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. 
                    Symptoms include feelings of sadness, angry outbursts, loss of interest in most or all normal activities, 
                    anxiety and sleep disturbances. If you think you may hurt yourself or attempt suicide, consider to calling 
                    a suicide hotline number if you're having suicidal thoughts.
                </p>,
                <div>
                    <p> {/*UE About Anxiety*/}
                        Anxiety is the mind and body's reaction to stressful, dangerous, or unfamiliar situations<br></br><br></br>
                        Anxiety-related disorders are divided into three main categories:
                    </p>
                    <ol>
                        <li>Anxiety disorders</li>
                        <li>Obsessive Compulsive disorders</li>
                        <li>Trauma- and Stressor- related disorders</li>
                    </ol>
                    <p>
                    Anxiety disorders - characterized by a general feature of excessive fear 
                    Examples: emotional response to perceived or real threat (excessive fear) 
                    and/or worrying about a future threat (anxiety)
                    </p>
                    <p>
                    Obsessive Compulsive disorders - characterized by obsessive, intrusive thoughts
                    Examples: constantly worrying about staying clean, or about one's body size (intrusive thoughts)
                    that trigger repeated hand-washing, or excessive exercise (compulsive behaviors)
                    </p> 
                    <p>
                    Trauma- and Stressor- related disorders - related to the experience of a trauma
                    Examples: unexpected death of a loved one, a car accident, or a violent incident like war or sexual 
                    assault (trauma) or divorce, beginning college, moving (stressor)
                    </p>
                    <p> <strong>Treatment Options:</strong>            
                    <ul>
                        <li>Counseling - talk therapy in which a mental healthcare provider helps patients 
                        develop strategies and coping skills to address specific issues like stress management or
                        interpersonal problems</li>
                        <li>Psychotherapy - long-term therapy and targets a broader range of issues such as
                        patterns of behavior</li>
                    </ul>
                    </p> 
                </div>,
                <div>
                    <p> {/*UE About Stress*/}
                    Stress is a feeling of emotional or physical tension that comes from any event or thought that makes
                    you feel frustrated, angry, or nervous.<br></br>
                    There are two main types of stress:
                    </p>
                    <ol>
                        <li>Acute stress</li>
                        <li>Chronic stress</li>
                    </ol>
                    <p>
                        Acute stress - This is short-term stress that goes away quickly. 
                        Acute stress helps you manage dangerous situations. It also occurs when you do 
                        something new or exciting. All people have acute stress at one time or another.<br></br>

                        Chronic stress - Chronic stress - This is stress that lasts for a longer period of time. You may 
                        have chronic stress if you have money problems, an unhappy marriage, or trouble 
                        at work. Any type of stress that goes on for weeks or months is chronic stress. 
                        You can become so used to chronic stress that you don't realize it is a problem. 
                        If you don't find ways to manage stress, it may lead to health problems.<br></br>
                        Seek help if:
                    </p>
                    <ul>
                        <li>You have feelings of panic, such as dizziness, rapid breathing, or a racing heartbeat.</li>
                        <li>You are unable to work or function at home or at your job.</li>
                        <li>You have fears that you cannot control.</li>
                        <li>You are having memories of a traumatic event.</li>
                    </ul>
                </div>,
                <div>
                    <p> {/*UE About Anger*/}
                    Anger is an emotion characterized by antagonism toward someone or something you feel has deliberately done 
                    you wrong. Anger can be a good thing. It can give you a way to express negative feelings, for example, or 
                    motivate you to find solutions to problems. But excessive anger can cause problems. Increased blood pressure 
                    and other physical changes associated with anger make it difficult to think straight and harm your physical 
                    and mental health.
                    </p>
                    <p>
                    Controlling anger:
                    The goal of anger management is to reduce both your emotional feelings and the physiological arousal that 
                    anger causes. You can't get rid of, or avoid, the things or the people that enrage you, nor can you change 
                    them, but you can learn to control your reactions. If you find yourself acting in ways that seem out of control 
                    and frightening, you might need help finding better ways to deal with this emotion.
                    </p>
                </div>,
                <div>
                    <p>
                    Bipolar disorder is a mental health condition that causes extreme mood swings that include emotional
                    highs (mania or hypomania) and lows (depression).
                    </p>
                    <p><strong>Symptoms:</strong>
                             
                    <ul>
                        <li>Bipolar I disorder. You've had at least one manic episode that may be preceded or followed 
                        hypomanic or major depressive episodes. In some cases, mania may trigger a break from reality (psychosis).</li>
                        <li>Bipolar II disorder. You've had at least one major depressive episode and at least one 
                        hypomanic episode, but you've never had a manic episode.</li>
                        <li>Cyclothymic disorder. You've had at least two years — or one year in children and teenagers 
                        — of many periods of hypomania symptoms and periods of depressive symptoms (though less severe than major 
                        depression).</li>
                        <li>Other types. These include, for example, bipolar and related disorders induced by certain 
                        drugs or alcohol or due to a medical condition, such as Cushing's disease, multiple sclerosis or stroke.</li>
                    </ul>
                    </p>
                    <p>
                        <strong>When to get emergency help?</strong> <br></br>
                        Suicidal thoughts and behavior are common among people with bipolar disorder. If you have thoughts of hurting 
                        yourself, suicide hotline number immediately, go to an emergency room, or confide in a trusted relative or friend
                    </p>
                </div>,
                <div>
                    <p>
                    Eating disorders are illnesses in which the people experience severe disturbances in their eating behaviors and related 
                    thoughts and emotions. People with eating disorders typically become preoccupied with food and their body weight.<br></br>
                    </p>
                    <p>
                        <strong>Treatment:</strong> <br></br>
                        Eating disorders clearly illustrate the close links between emotional and physical health. The first step is to assist 
                        patients with regaining weight to a healthy level. For patients with binge eating disorder it is important to help them 
                        interrupt and stop binges.
                    </p>
                    <p>However, restoring a person to normal weight or temporarily ending the binge-purge cycle does not address the underlying 
                    emotional problems that cause or are made worse by the abnormal eating behavior. Psychotherapy helps individuals with eating 
                    disorders to understand the thoughts, emotions and behaviors that trigger these disorders. In addition, some medications have 
                    also proven to be effective in the treatment process.
                    </p>       
                    <p>
                        Because of the serious physical problems caused by these illnesses, it is important that any treatment plan for a person with 
                        anorexia nervosa, bulimia nervosa or binge eating disorder include general medical care, nutritional management and nutritional 
                        counseling. These measures begin to rebuild physical well-being and healthy eating practices.
                    </p>
                    
                    
                </div>
                ], 
                [
                <p> {/*DWTP What is the COVID-19 Pandemic?*/}
                    The COVID‑19 pandemic, also known as the coronavirus pandemic, 
                    is an ongoing global pandemic of coronavirus disease 2019 (COVID‑19), 
                    caused by severe acute respiratory syndrome coronavirus 2 (SARS‑CoV‑2).
                    The outbreak was first identified in December 2019 in Wuhan, China. As of 14 August 2020, 
                    more than 21 million cases of COVID‑19 have been reported in more than 188 countries and territories, 
                    resulting in more than 761,000 deaths; more than 13 million people have recovered.
                </p>,
                <ul> {/*DWTP Healthy Practises*/}
                    <li>Frequently wash your hands with soap and water for <bold>at least</bold>20 seconds.</li>
                    <li>Avoid touching your eyes, nose, or mouth with unwashed/dirty hands.</li>
                    <li>Practice good respiratory etiquette (covering coughs and sneezes).</li>
                    <li>Avoid close contact wwith people who are sick.</li>
                    <li>Stay home if sick.</li>
                </ul>
                ], 
                [
                <p> {/*HH Maintain a Healthy Diet*/}
                    Eat on a daily basis without missing meals, strive to eat healthy foods while avoiding junk foods. 
                    The food you eat can also affect how your body feels whether that is energetic or powerless. 
                    Even worse, eating unhealthy foods can lead to physical problems and eventually disrupting your 
                    mental health as well.
                </p>,
                <p> {/*HH Stick to a Sleeping Schedule*/}
                    Sleeping plays a vital role in determining your emotions, behavior, and how you feel throughout 
                    your day. On the other hand, your daily routines, such as your meals and activities, impact your 
                    quality of sleep. Ensuring you get sufficient hours of sleep while also sleeping and waking up at 
                    the same hours every day can lead to a healthier lifestyle.
                </p>,
                <p> {/*HH Keep in Touch*/}
                    Whether it is during the Coronavirus pandemic or not, a way to cope with your mental health is to 
                    keep in touch with your friends and families. Humans are social beings and socializing is considered 
                    to be a basic need. Try to reach out to those you have not talked in years by meeting up, chatting 
                    on the phone, or even play online games together. However, most importantly, understand that you are 
                    not alone and you have a community who is there to help you out. All you need is to speak up.
                </p>,
                <p> {/*HH On the Move*/}
                    Another factor that can affect both your mental and physical health is the lack of exercise. As you 
                    grow up, you may find yourself doing fewer sports or activities that keep your body moving. It is 
                    crucial that you maintain a routine to take some time doing sports such as jogging, swimming, and even 
                    yoga can help. Otherwise, your body would feel stiff and have a weaker immune system that can lead to 
                    worse symptoms.
                </p>,
                <p> {/*HH Mind-setting*/}
                    Life is a roller coaster and everyone knows that things will always go the other way we intended. You 
                    are not alone! The best way to help yourself with mistakes is to have a growth mindset in which you 
                    learn from your mistakes and let go of the little things. Do not regret the choices you made, but take 
                    them as lessons for future events. 
                </p>
                ]
            ],
            open: [false, false, false, false]
        }
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen(index) {
        let newOpenState = [...this.state.open];
        newOpenState[index] = !this.state.open[index];
        this.setState({open: newOpenState}, () => console.log(this.state.open));
    }

    render() {
        const {classes} = this.props;
        const {question, topic, answers, open} = this.state;
        return(
            <div className={classes.border}>
                <h2 className={classes.title}>Frequently Asked Questions</h2>
                <List>
                    {this.state.questionText.map((question, i) => (
                        <Question questionText={question} topicText={topic[i]} answersText={answers[i]} open={open} handleOpen={this.handleOpen} index={i}/>
                    ))}
                </List>
            </div> 
        )
    }
}
export default withStyles(styles)(FAQ);

