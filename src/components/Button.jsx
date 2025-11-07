import { Link } from "react-router-dom"

export default function Button({ children, type, color, icon: Icon, path, ...rest }) {

    let btcolor;
    switch (type) {
        case "action":
            btcolor = "orangered";
            break;
        case "neutral":
            btcolor = "royalblue";
            break;
        case "yes":
            btcolor = "forestgreen";
            break;
        case "no":
            btcolor = "firebrick";
            break;
        default:
            btcolor = color;
    }

    const theButton = (
        <div className="shadow-md gap-2 flex m-2 min-w-50 px-5 py-2 sm:min-w-70 text-xl text-center text-white items-center justify-between rounded-3xl outline-0 hover:outline-3 outline-transparent hover:outline-orange-500 outline-offset-2 cursor-pointer duration-60 active:outline-3 active:outline-offset-2 active:outline-blue-600 focus:outline-3 focus:outline-offset-2 focus:outline-blue-600 transition-all" style={{ backgroundColor: btcolor }} {...rest}>
            {children}
            {Icon && <Icon className="size-8 bg-black/50 rounded-full" />}
        </div>
    );

    return path ? <Link to={path}>{theButton}</Link> : theButton;
}