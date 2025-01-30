import React from "react"

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0 px-8 md:px-16 lg:px-32">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by codesolved.co.uk. All rights reserved. @2025
                </p>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Terms
                    </a>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Privacy
                    </a>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    )
}

