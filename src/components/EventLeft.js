import Pic1 from '../img/shiksharth.jpg';
import Pic5 from '../images/Picture5.jpg';
import Pic4 from '../images/Picture4.png';
import Pic2 from '../images/Picture2.jpg';
import './EventLeft.css';
function EventLeft(props){
    const Events= [
        {
            img:Pic5,
            name:"Kaushal Uthan",
            description:"Skill development is very important to polish the skills of a common man. Today there is no shortage of jobs in our country but there is a shortage of skilled people to give those jobs. The Government of India is running many schemes for the skill development of the citizens, due to which many skilled people are also coming out. In many cases it happens that a common child who has some skillful talent hidden inside but he cannot come out without any guidance. Our program Kaushal Utthan provides this guidance to the children. Skill development activities are part of our regular curriculum for children. We also organize a grand program every year in which children are encouraged to bring out their hidden talents. The objective of this program is to provide training opportunities to rural women. We have conducted sessions on handicraft making and pottery design. It fostered creativity and a sense of freedom in them."
        },
        {
            img:Pic4,
            name:"Chikitsa",
            description:"Just as skill development and one-time diet are necessary for a common man, similarly good health facilities are also necessary. Today there are many underprivileged people in our country who do not have access to essential health facilities. Today, in the time of pandemic, where lakhs of people have lost their relatives, now it becomes even more important that we reach health facilities to the needy. Our program chikitsa meets this need.In July 2019, the organization had treated 25 adults and 40 children free of cost along with some medical staff in the slums of Dwarka and they were also provided with free medicines."
            
        },
        {
            img:Pic2,
            name:"Aahar",
            description:"An Aahar may be a small word, but it has more than four times its meaning. Just as a common man cannot live without water or air, diet is equally important for that human being. It is necessary for Aahar more than a human being because they are the foundation of the golden future of our country, but in our society there is such a section of children who do not even get Aahar at one time. Our aim under Aahar is to provide nutritious and safe food to children. Many children crave one meal in today's era, so the organization takes special care that children get one meal at the time of school. We distributed relief material among the poor and helpless during the corona pandemic. The relief material included wheat, flour, pulses, rice, spices and other materials."
        },
        {
            img:Pic1,
            name:"Shiksharth",
            description:"The Shakuntala Poddar Welfare Foundation's Shiksharth programme aims to teach underprivileged children who have been denied access to education or have missed school due to unforeseen circumstances. Shiksharth's main goal is to provide students with high-quality education by using approaches that are tailored to each child's needs. Students who are already enrolled in higher secondary schools but lacked a solid foundation from the start are provided suitable resources and tuition. We strive to reintegrate children who have had to leave school for a variety of reasons by offering instructional facilities and aid with school enrollment. Apart from child-centered interventions, we also hope to raise awareness among parents about the value of education and to persuade them to pay attention to their children's growth and good schooling so that they can realise their dreams.  Our project's core concept is education. Our main goal is to provide high-quality education to children who are disadvantaged.This includes putting in place a solid infrastructure to assure their overall development, which iscritical to their health, character, and abilities.",
        }
    ]
    function fetchEvent(){
        for(let i in Events){
            if(Events[i].name==props.current){
                return Events[i];
            }
        }
    }
    return(       
            <div className="shikleft">
                <h1>{fetchEvent().name}</h1>
                <img src={fetchEvent().img}></img>
                <br/>
                <p>{fetchEvent().description}</p>
            </div>

    )
}

export default EventLeft;