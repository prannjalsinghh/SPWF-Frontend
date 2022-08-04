import './feedback.css';
import pic1 from '../img/CA Hemant Mehta.jpg';
import pic2 from '../img/Pooja Chugh.jpg';
import pic3 from '../img/Picture17.jpg';

const pic = [pic1,pic2,pic3];

var counter = 0;
const feedbackdesc = [`<p>Shakuntala poddar foundation is already doing a great job by providing Education to Underprivileged children, building women empowerment. They are building pillars for our country's future.</p>
<p>In this pandemic situation, an effort Initiated by this foundation to help needy people by providing free food service is highly commendable. Hope to work with this foundation every time whenever they initiate new way to help people around us.</p>`,`<p>I have associated with "Shakuntala Poddar Welfare Foundation" in 2020. SPWF is doing Tremendous job not only providing good Education to underprivileged kids, Also in this Pandemic situation. </p>
<p>NGO is providing cooked food everyday to hundreds of Underprivileged people. I am honoured to be a part of the organisation in a small way. </p>
<p>Keep up the great work !</p>`,`<p>Excellent work by Shakuntala Poddar team during COVID time by providing food to the needy. Our firm Is Associated with SPWF right from the beginning and seen the determination with which they are working. They are doing excellent job in the field of free education to underprivileged children .</p>
<p>We always wanted to do some welfare  but were not aware whom to support. SPWF  is the place  where we can see the direct impact on the welfare of underprivileged with the contribution we make.</p>
<p>We wish SPWF to continue doing the excellent work of helping the society.</p>`];

const names = [`<h5>CA Hemant Mehta</h5>
<h6>Charted Accountant</h6>`,`<h5>Pooja Chugh</h5>`,`<h5>Tarun Balkrishna Kandhari</h5>
<h6>Founder Partner and Chairman</h6>
<h6>Tarun Kandhari and CO LLP</h6>`]

function showFeedback(){
    var index = counter%3;
    document.getElementsByClassName('feedbackdesc')[0].innerHTML = feedbackdesc[index];
    document.getElementsByClassName('namedesc')[0].innerHTML = names[index]
    document.getElementById('feedpic').src = pic[index];
}
function counterup(){
    counter++;
    showFeedback();
}
function counterdown(){
    counter++;
    showFeedback();
}
function Feedback(){
    return(
        <div className="feedback">
        <i class="fa-solid fa-circle-chevron-left" onClick={counterdown}></i>
            <div className="innerfeedback">
            <i class="fa-solid fa-quote-left"></i>
            <div className='feedbackdesc'>
            <p>Shakuntala poddar foundation is already doing a great job by providing Education to Underprivileged children, building women empowerment. They are building pillars for our country's future.</p>
            <p>In this pandemic situation, an effort Initiated by this foundation to help needy people by providing free food service is highly commendable. Hope to work with this foundation every time whenever they initiate new way to help people around us.</p>
            </div>
            <div className="feedbackpic">
                <img src={pic1} id='feedpic' />
                <div className='namedesc'>
                <h5>CA Hemant Mehta</h5>
                <h6>Charted Accountant</h6>
                </div>
            </div>
            </div>
            <i class="fa-solid fa-circle-chevron-right" onClick={counterup}></i>
        </div>
    )
}

export default Feedback;