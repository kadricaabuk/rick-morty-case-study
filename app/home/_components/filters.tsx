// _components/FilterControls.tsx
'use client'
import React from 'react'
import { useFilterStore } from '@/lib/stores/filterStore'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

const Filters = () => {
    const { name, status, type, gender, setFilters } = useFilterStore()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFilters({ [name]: value })
    }

    const resetFilters = () => setFilters({
        name: '',
        status: '',
        type: '',
        gender: '',
    })

    return (
        <div className='mb-4 flex flex-row justify-between w-[95%]'>
            <div className='flex flex-row gap-4'>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleChange}
                    className='border-gray-100 border-2 rounded-md px-2'
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Type"
                    value={type}
                    onChange={handleChange}
                    className='border-gray-100 border-2 rounded-md px-2'
                />
                <select name="status" value={status} onChange={handleChange} className='border-gray-100 border-2 rounded-md px-2'>
                    <option value="">Status</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                <select name="gender" value={gender} onChange={handleChange} className='border-gray-100 border-2 rounded-md px-2'>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <Button onClick={resetFilters}>
                <X />
                Reset Filters
            </Button>
        </div>
    )
}

export default Filters
