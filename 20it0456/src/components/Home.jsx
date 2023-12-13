import './Homep.css';

function Home(){
    return(
        <div class="homep">
            <span class="wel" >HI!</span> <br/> <span> {localStorage.getItem('Name')}!</span>
            <br/>
            
        </div>
    );
}
export default Home;