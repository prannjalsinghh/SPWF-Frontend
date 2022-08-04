import './goalbox.css';
var counter = 0;
var listContent = [`<p>1)  Enabling at least 500 children of West Delhi Slums with</p>
<ul>
    <li>Academic qualification through classroom education</li>
    <li>Extra-curricular activities including sports</li>
    <li>Nourishment with foods</li>
    <li>Keeping them healthy with medical support, as required</li>
</ul>`,`<p>2)  Empowering at least 200 women of West Delhi Slums by</p>
<ul>
    <li>Establishing training centre for them for skill development</li>
    <li>Making them economically self-sustained by providing them employment</li>
    <li>Enabling them to have official identification (Aadhar Card etc.) </li>
</ul>`,`<p>3)  Enhancing participation by building a community of committed young volunteers, subject matter experts, donors, professionals and other stakeholders to affect change.</p>`]
function showlist(){
    var index = counter%3;
    document.getElementById('changegoal').innerHTML = listContent[index];
}
function counterlow(){
    counter--;
    showlist();
}
function counterUp(){
    counter++;
    showlist();
}
function Goalbox(){
    return(
        <div className='goalbox'>
            <div className="goalboxleft">
                <div className="innergoalboxleft">
                    <h2>Help Is Our Main Goal!</h2>
                    <h3>Our Goals-</h3>
                    <div className='changinggoals'>
                    <h4 onClick={counterlow}>&lt;</h4>
                    <span id='changegoal'>
                    	<p>1)  Enabling at least 500 children of West Delhi Slums with</p>
                        <ul>
                            <li>Academic qualification through classroom education</li>
                            <li>Extra-curricular activities including sports</li>
                            <li>Nourishment with foods</li>
                            <li>Keeping them healthy with medical support, as required</li>
                        </ul>   
                    </span>
                    <h4 onClick={counterUp}>&gt;</h4>
                    </div>
                </div>
            </div>
            <div className='goalboxright'>
            <a style={{color:"white"}} href="https://youtube.com/watch?v=sWDEMs_vxWI"><i class="fa-solid fa-circle-play"></i></a>
            </div>
        </div>
    )
}
export default Goalbox;