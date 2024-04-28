import CodeIcon from '@mui/icons-material/Code';
import Button from './button/Button';

export default function Header() {
    return (
        <header className="fixed z-[99] bg-transparent w-full px-3 md:px-[4vw] h-12 md:h-[12vh] flex justify-between items-end text-2xl md:text-[2.5vw]">
            <a href='#Home' className="font-bold cursor-pointer flex items-center tracking-[5px]">
                <CodeIcon fontSize='large' className='mr-2' />
                DUDUKROP
            </a>
            <div className='relative top-1'>
                <Button>
                    Contato
                </Button>
            </div>
        </header>
    )
}