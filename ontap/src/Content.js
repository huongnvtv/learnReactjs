import {useState, useEffect} from 'react'

function Content(){
   const [avatar, setAvatar] = useState()
   useEffect(() => {
      // cleanup  
      return () => {
          avatar && URL.revokeObjectURL(avatar.preview)
      }
   }, [avatar])
    const handlePreviewAvatar = (e) =>{
        const file = e.target.files[0];
        console.log(file);
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    return (
        <div>
            <input type="file"  onChange={handlePreviewAvatar} />
            {
            avatar && (
                <img src={avatar.preview} alt='' width="80%" />
            )
        }
        </div>
    )
}
export default Content;