import MainNav from "./main-nav";

const SiteHeader = () => {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="flex h-16 items-center space-x-4 mx-6 sm:justify-between sm:space-x-0">
                <MainNav />
            </div>
        </header>
    )
}

export default SiteHeader;