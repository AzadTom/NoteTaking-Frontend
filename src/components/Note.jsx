
const Note = ({title,content,onclick})=>{


    return(
        <>
         <div className="h-[300px] border border-[#BDBDBD]  rounded-md p-4" onClick={onclick}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-ellipsis overflow-hidden text-[#BDBDBD]">{content}</p>
         </div>
        </>
    )
}


export default Note;