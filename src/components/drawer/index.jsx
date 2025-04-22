import React from 'react';
import { Drawer, Descriptions, Table, Divider } from 'antd';

const InvoiceDrawer = ({ open, onClose, data }) => {
    if (!data || !data?.Invoice) return null;

    const { Invoice } = data;

    const invoiceDetailsColumns = [
        {
            title: 'Mã sản phẩm',
            dataIndex: 'ProductCode',
            key: 'ProductCode',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'ProductName',
            key: 'ProductName',
        },
        {
            title: 'Số lượng',
            dataIndex: 'Quantity',
            key: 'Quantity',
        },
        {
            title: 'Giá',
            dataIndex: 'Price',
            key: 'Price',
            render: (value) => `${value.toLocaleString()} đ`,
        },
        {
            title: 'Thành tiền',
            key: 'total',
            render: (_, record) => `${(record.Quantity * record.Price).toLocaleString()} đ`,
        },
    ];

    const paymentColumns = [
        {
            title: 'Phương thức',
            dataIndex: 'MethodStr',
            key: 'MethodStr',
        },
        {
            title: 'Số tiền',
            dataIndex: 'Amount',
            key: 'Amount',
            render: (value) => `${value.toLocaleString()} đ`,
        },
    ];

    return (
        <Drawer
            title={`Chi tiết hóa đơn - ${Invoice?.Code}`}
            placement="right"
            width={700}
            onClose={onClose}
            open={open}
        >
            <Descriptions column={2} bordered size="small">
                <Descriptions.Item label="Mã hóa đơn">{Invoice?.Code}</Descriptions.Item>
                <Descriptions.Item label="Chi nhánh ID">{Invoice?.BranchId}</Descriptions.Item>
                <Descriptions.Item label="Người bán">{Invoice.SoldBy?.GivenName}</Descriptions.Item>
                <Descriptions.Item label="Trạng thái">{Invoice?.Status === 1 ? 'Hoàn tất' : 'Khác'}</Descriptions.Item>
                <Descriptions.Item label="Tổng tiền">{Invoice?.Total?.toLocaleString()} đ</Descriptions.Item>
                <Descriptions.Item label="Thanh toán">{Invoice?.PayingAmount?.toLocaleString()} đ</Descriptions.Item>
                <Descriptions.Item label="Loại">{Invoice?.Type === 1 ? 'Bán hàng' : 'Khác'}</Descriptions.Item>
                <Descriptions.Item label="Ghi chú">{Invoice?.Description}</Descriptions.Item>
            </Descriptions>

            <Divider orientation="left">Danh sách sản phẩm</Divider>
            <Table
                dataSource={Invoice?.InvoiceDetails}
                columns={invoiceDetailsColumns}
                rowKey="Uuid"
                pagination={false}
                size="small"
            />

            <Divider orientation="left">Phương thức thanh toán</Divider>
            <Table
                dataSource={Invoice?.Payments}
                columns={paymentColumns}
                rowKey="Id"
                pagination={false}
                size="small"
            />
        </Drawer>
    );
};

export default InvoiceDrawer
