

"use client"

import { useState } from 'react';

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectLabel, 
    SelectTrigger, 
    SelectValue 
} from '@/components/ui/select';
import { 
    DropdownMenu, 
    DropdownMenuCheckboxItem, 
    DropdownMenuContent, 
    DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}


export function DataTable<TData extends { clientName: string }, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]) 
    const [currentStatus, setCurrentStatus] = useState("all")
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    const [tableData, setTableData] = useState<TData[]>(data)
    const hasRowSelected = Object.keys(rowSelection).length > 0
    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })


    return (
        <div>
            <div className="flex justify-between items-center py-4">
                <Input
                    placeholder="Filter anything... (client name, status, email and amount)"
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => {
                        setCurrentStatus("all");
                        table.getColumn("status")?.setFilterValue(undefined)
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }}
                    className="max-w-sm"
                />

                <div className='flex justify-between items-center gap-3'>

                    {
                        hasRowSelected && (
                            <Button
                                onClick={() => {
                                    const selectedNames = table.getSelectedRowModel().rows.map((row) => (row.original as TData).clientName)
                                    setTableData(prev =>
                                        prev.filter(item => !selectedNames.includes(item.clientName))
                                    )
                                    table.resetRowSelection()
                                }}
                                variant="destructive">
                                Borrar
                            </Button>
                        )
                    }

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Columnas</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                    column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                                )
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                            
                    <Select
                        value={ currentStatus }
                        onValueChange={(value) => {
                            if(value === "all") {
                                table.getColumn("status")?.setFilterValue(undefined)
                                setCurrentStatus("all")

                                return; 
                            }
                            setCurrentStatus(value)
                            table.getColumn("status")?.setFilterValue(value)
                        }}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Todos los estados" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Estados</SelectLabel>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="processing">Processing</SelectItem>
                                <SelectItem value="success">Success</SelectItem>
                                <SelectItem value="failed">Failed</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className='flex justify-between items-center'>
                <div className="flex-1 text-sm text-muted-foreground">
                    { table.getFilteredSelectedRowModel().rows.length } of{" "}
                    { table.getFilteredRowModel().rows.length } row(s) selected.
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}>
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}>
                        Next
                    </Button>
                </div>
            </div>
            <div className='flex justify-end items-center'>
                <Select
                    onValueChange={(value) => {
                        table.setPageSize(+value)
                    }}>
                    <SelectTrigger>
                        <SelectValue placeholder="10 rows" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Rows per page</SelectLabel>
                            <SelectItem value="10">10 rows</SelectItem>
                            <SelectItem value="20">20 rows</SelectItem>
                            <SelectItem value="50">50 rows</SelectItem>
                            <SelectItem value="100">100 rows</SelectItem>
                            <SelectItem value="250">250 rows</SelectItem>
                            <SelectItem value="500">500 rows</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
