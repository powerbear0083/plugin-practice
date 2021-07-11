import Logo from "../Logo/Logo.js";

export default function LogoBlock(
    {
        children
    }
) {
    return (
        <div className="logo-block__wrap text-center mt-4 mb-4">
            <Logo/>
            { children }
        </div>
    )
}