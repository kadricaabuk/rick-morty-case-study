"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ICharacter, ICharacterStatus } from '@/lib/interface/character';
import Image from 'next/image';
import { Radio, ShieldQuestion, ShieldX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface StatusIconProps {
    status: ICharacterStatus;
}
const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
    const statusList = {
        Dead: <ShieldX />,
        Alive: <Radio />,
        unknown: <ShieldQuestion />
    }

    return (
        <div className='flex flex-row gap-2'>
            <p className='font-semibold'>Status:</p>
            {statusList[status]}
        </div>
    )

};

const Character = ({ c }: { c: ICharacter }) => {

    const router = useRouter()

    return (
        <Card className='w-[250px] h-[500px] flex flex-col justify-between items-center'>
            <div>
                <CardHeader className='items-center p-0 mb-4'>
                    <Image className='rounded-md rounded-b-none' alt={c.name} src={c.image} width={250} height={150} />
                    <CardTitle>{c.name}</CardTitle>
                    <CardDescription>{c.species}</CardDescription>
                </CardHeader>
                <CardContent className='w-full flex flex-col items-start'>
                    <p><span className='font-semibold'>Gender: </span>{c.gender}</p>
                    <p><span className='font-semibold'>Origin: </span>{c.origin.name}</p>
                    <StatusIcon status={c.status as ICharacterStatus} />
                </CardContent>
            </div>
            <CardFooter>
                <Button onClick={() => router.push(c.url)}>
                    See Detailed Character
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Character