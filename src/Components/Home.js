

function Home(){

const pixstyle= {
    fontSize:"12px"
}

return(
<div className="homePAge">
<h1>Welcome to Ghibli App</h1>
<p>An Application built using the React framework, using the Studio Ghibli API's data imported to a JSON file directly in the application's 'Components' folder. This is a frontend-only application that displays information about the movies, characters, and locations created by Studio Ghibli. </p>
<p style={pixstyle}>Images not sourced from API can be found at <a href="https://www.pixabay.com" alt="pixabay site">pixabay's website</a>. This site provides free images for personal and commercial use.
</p>
<p style={pixstyle}>Images sourced from pixabay have been edited by the <a href="https://www.gimp.org" alt="GIMP site">GIMP software</a></p>

<div className="cardContact">
<h3 >About the Developer</h3>

<p><strong>Name:</strong> Sharukh G. Velupillai</p>
<p><strong>Organization:</strong> PURSUIT</p>
<p>
        <strong>GitHub:</strong>
        <a href="https://github.com/SharukhGV">
Sharukh's GitHub Portfolio        </a>
      </p><p>
        <strong>Email:</strong>
        <a href="mailto:sharukh.g.velupillai@gmail.com">
          sharukh.g.velupillai@gmail.com
        </a>
      </p>
</div>



</div>

)
}


export default Home


