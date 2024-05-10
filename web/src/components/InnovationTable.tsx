"use client";
import React, { useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { Button, Input, Space, Table, Select, Dropdown, message } from 'antd';
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import type { MenuProps } from 'antd';
import { BiChevronDown } from "react-icons/bi";
import { IoGrid, IoListSharp } from "react-icons/io5";

type OnChange = NonNullable<TableProps<DataType>['onChange']>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
    id: number;
    key: string;
    name: string;
    valueChain: string[] | string;
    usage: string;
    year: string | Date;
    implementationPhase: string;
}

const data: DataType[] = [
  {
    id: 1,
    key: '1',
    name: 'Lawn mower',
    valueChain: ['input supply', 'farm production'],
    usage: 'Rice milling',
    year: '2024',
    implementationPhase: 'Wide use'
  },
  {
    id: 2,
    key: '2',
    name: 'Lawn mower',
    valueChain: ['input supply', 'farm production'],
    usage: 'Rice milling',
    year: '2024',
    implementationPhase: 'Wide use'
  },
  {
    id: 3,
    key: '3',
    name: 'Lawn mower',
    valueChain: ['input supply', 'farm production'],
    usage: 'Rice milling',
    year: '2024',
    implementationPhase: 'Wide use'
  },
];

const InnovationTable: React.FC = () => {
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as Sorts);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };

  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
      icon: <FaChevronDown />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <FaChevronDown />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <FaChevronDown />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <FaChevronDown />,
      danger: true,
      disabled: true,
    },
  ];

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };
  
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const columns: TableColumnsType<DataType> = [
    {
        title: "#",
        dataIndex: "id",
        key: "id",
    },
    {
      title: 'Innovation',
      dataIndex: 'name',
      key: 'id',
      render: (name) => <p className='flex items-center'><span className='w-7 h-7 bg-yellow-100 rounded-md mr-1 border'></span> {name}</p>
    //   filters: [
    //     { text: 'Joe', value: 'Joe' },
    //     { text: 'Jim', value: 'Jim' },
    //   ],
    //   filteredValue: filteredInfo.name || null,
    //   onFilter: (value, record) => record.name.includes(value as string),
    //   sorter: (a, b) => a.name.length - b.name.length,
    //   sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
    //   ellipsis: true,
    },
    {
        title: "Use",
        dataIndex: "usage",
        key: "id",
    },
    {
        title: "Implementation Phase",
        dataIndex: "implementationPhase",
        key: "id",
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'id',
    //   sorter: (a, b) => a.year - b.year,
    //   sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
    //   ellipsis: true,
    },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    //   filters: [
    //     { text: 'London', value: 'London' },
    //     { text: 'New York', value: 'New York' },
    //   ],
    //   filteredValue: filteredInfo.address || null,
    //   onFilter: (value, record) => record.address.includes(value as string),
    //   sorter: (a, b) => a.address.length - b.address.length,
    //   sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
    //   ellipsis: true,
    // },
  ];

  return (
    <>
        <h3 className='w-full text-center font-playfair text-3xl font-bold leading-8 mb-5 capitalize tracking-wide'>Cycle Through top innovations.</h3>

        <div className='flex gap-2 items-center my-3'>
            <Input prefix={<IoSearchOutline className='mr-3' />} size='large' className=' flex w-full rounded-xl px-4' placeholder='Search via Title, sector, value chain e.t.c' style={{ background: "#fafafa" }} />

            <button className='bg-myblack text-white px-4 py-2 rounded-md min-w-[180px]'>click to search</button>
        </div>

        <div className='flex items-center mb-5 w-full'>
          <div className='w-[80%] flex gap-4 items-center'>
            <div className='border bg-[#fafafa] rounded-2xl px-3 py-2 text-[14px]'> 
                <span className='text-mygray mr-1'>value chain: </span>
                <Dropdown menu={menuProps} className='cursor-pointer'>
                    <Space>
                        All
                        <BiChevronDown className='text-[20px]' />
                    </Space>
                </Dropdown>
            </div>
            <div className='border bg-[#fafafa] rounded-2xl px-3 py-2 text-[14px]'> 
                <span className='text-mygray mr-1'>implementation phase: </span>
                <Dropdown menu={menuProps} className='cursor-pointer'>
                    <Space>
                        All
                        <BiChevronDown className='text-[20px]' />
                    </Space>
                </Dropdown>
            </div>
            <div className='border bg-[#fafafa] rounded-2xl px-3 py-2 text-[14px]'> 
                <span className='text-mygray mr-1'>year created: </span>
                <Dropdown menu={menuProps} className='cursor-pointer'>
                    <Space>
                        All
                        <BiChevronDown className='text-[20px]' />
                    </Space>
                </Dropdown>
            </div>
            <div className='border bg-[#fafafa] rounded-2xl px-3 py-2 text-[14px]'> 
                <span className='text-mygray mr-1'>country: </span>
                <Dropdown menu={menuProps} className='cursor-pointer'>
                    <Space>
                        All
                        <BiChevronDown className='text-[20px]' />
                    </Space>
                </Dropdown>
            </div>
          </div>
          <div className='flex justify-end w-[20%]'>
            <div className='flex gap-4'>

            <button className='p-3 border flex justify-center items-center rounded-md bg-myoffwhie'><IoGrid /></button>
            <button className='p-3 border flex justify-center items-center rounded-md bg-myblack text-white'><IoListSharp /></button>
            </div>
          </div>
        </div>

        <Space style={{ marginBottom: 16 }}>
            {/* <Button onClick={setAgeSort}>Sort age</Button>
            <Button onClick={clearFilters}>Clear filters</Button>
            <Button onClick={clearAll}>Clear filters and sorters</Button> */}
        </Space>
        <Table columns={columns} bordered={false} dataSource={data} onChange={handleChange} />
    </>
  );
};

export default InnovationTable;


