import { UserCardProps } from '@/interfaces'
import React from 'react'

const UserCard: React.FC<UserCardProps> = ({name, address, email}) => {
  return (
    <div>
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-sm mt-2">{email}</p>
        <p className="text-xs text-gray-500 mt-3">{address.street}, {address.city}</p>
    </div>
  )
}

export default UserCard