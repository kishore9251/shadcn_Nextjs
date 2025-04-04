"use client"
import { DataTable } from '@/Components/DataTable'
import PageTitle from '@/Components/PageTitle'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

interface Setting{
  category: string;
  value: string | number | boolean;
}

 const data: Setting[] = [
  {
    "category": "Account",
    "value": true,
  },
  {
    "category": "Notifications",
    "value": false,
  }, {
    "category": "Language",
    "value": "English",
  }, {
    "category": "Theme",
    "value": "Dark",
  }
]


const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
]


export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  )
}

 