import CodeIcon from '@mui/icons-material/Code';
import Button from './button/Button';

export default function Header() {
    return (
        <header className="fixed z-[99] bg-transparent w-full px-3 lg:px-[4vw] h-12 lg:h-[12vh] flex justify-between items-end text-2xl lg:text-[2.5vw]">
            <div className="font-bold cursor-pointer flex items-center tracking-[5px]">
                <CodeIcon fontSize='large' className='mr-2' />
                DUDUKROP
            </div>
            <div className='relative top-1'>
                <Button>
                    Contato
                </Button>
            </div>
        </header>
    )
}