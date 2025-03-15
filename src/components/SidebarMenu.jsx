import { Menu } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const SidebarMenu = () => {

    return (
        <Sheet>
            <SheetTrigger><Menu size={32} /></SheetTrigger>
            <SheetContent className="border-none">
                <SheetHeader>
                    <img src="./icon-dark.svg" className="h-[40px] md:h-[44px] mb-4" />
                </SheetHeader>
                <div className="flex flex-col w-full space-y-3 mt-4">
                    <SheetClose asChild>
                        <a href="#">
                            <div className="text-lg bg-dark/50 hover:bg-dark p-1 md:px-4 text-white font-bold md:gap-8 rounded-lg text-center">
                                <h2>Sobre</h2>
                            </div>
                        </a>
                    </SheetClose>

                    <SheetClose asChild>
                        <a href="#habilidades">
                            <div className="text-lg bg-dark/50 hover:bg-dark p-1 md:px-4 text-white font-bold md:gap-8 rounded-lg text-center">
                                <h2>Habilidades</h2>
                            </div>
                        </a>
                    </SheetClose>

                    <SheetClose asChild>
                        <a href="#projetos">
                            <div className="text-lg bg-dark/50 hover:bg-dark p-1 md:px-4 text-white font-bold md:gap-8 rounded-lg text-center">
                                <h2>Projetos</h2>
                            </div>
                        </a>
                    </SheetClose>

                    <SheetClose asChild>
                        <a href="#contato">
                            <div className="text-lg bg-dark/50 hover:bg-dark p-1 md:px-4 text-white font-bold md:gap-8 rounded-lg text-center">
                                <h2>Contato</h2>
                            </div>
                        </a>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default SidebarMenu;