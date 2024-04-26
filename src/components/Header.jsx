import CodeIcon from '@mui/icons-material/Code';
import Button from './button/Button';

export default function Header() {
    return (
        <header className="fixed z-[99] bg-transparent w-full px-10 h-24 flex justify-between items-end text-[32px]">
            <div className="font-bold cursor-pointer flex items-center tracking-[5px]">
                <CodeIcon fontSize='large' className='mr-2' />
                DUDUKROP
            </div>
            <div>
                <Button>
                    Contato
                </Button>
            </div>
        </header>
    )
}