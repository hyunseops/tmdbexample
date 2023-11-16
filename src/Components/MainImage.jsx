import './MainImage.css'


const MainImage = () => {
  return (
    <div className="main-image-container">
      
      <img classname="background" src="0.jpg" style={{width:"100%",height:"500px",opacity:0.5}}></img>
      <h1 className="text">Search the TMDB Movies</h1>
      <div className="mx-auto flex flex-cols">
          <input style={{width: 500,height:30}}
            type="text"
            id="title"
            name="title"
            
          />
          
          <button style={{width:100,height:30}}
            type="submit"
            
          >
            Search
          </button>
          </div>
    </div>
  )
}

export default MainImage