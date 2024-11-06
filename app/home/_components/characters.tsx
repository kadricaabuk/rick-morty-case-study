'use client'
import React, { Fragment } from 'react'
import { useQuery } from "@tanstack/react-query";
import { useFilterStore } from '@/lib/stores/filterStore';
import { ICharacter } from '@/lib/interface/character';
import { getCharacters } from '@/lib/utils';
import Character from './character';
import NoCharacterFound from './no-character-found';
import { LoaderPinwheel } from 'lucide-react';
import { Pagination } from '@/components/ui/pagination';

const Characters = () => {
    const { name, status, type, gender } = useFilterStore()
    
    const { data, isLoading, error } = useQuery({
        queryKey: ['characters', { name, status, type, gender }],
        queryFn: () => getCharacters({ name, status, type, gender }),
    })

    return (
        <div className='flex justify-center flex-wrap gap-2'>
            { isLoading && <LoaderPinwheel className='animate-spin'/> }
            { (error || !data?.results) && !isLoading && <NoCharacterFound /> }
            {
                data?.results && data?.results.map((c: ICharacter) => (
                    <Fragment key={c.id}>
                        <Character c={c} />
                    </Fragment>
                ))
            }
            <Pagination />
        </div>
    )
}

export default Characters