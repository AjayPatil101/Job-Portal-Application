
const PostedJobCard = (props: any) => {
    return (
        <div className="bg-mine-shaft-900 rounded-xl  p-4 shadow-md border-l-2 border-l-bright-sun-400">
            <div className="text-sm font-semibold">{props.jobTitle}</div>
            <div className="text-xs font-medium text-mine-shaft-300">{props.location}</div>
            <div className="text-xs text-mine-shaft-300">{props.posted}</div>
        </div>
    )
}


export default PostedJobCard