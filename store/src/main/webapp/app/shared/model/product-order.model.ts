import dayjs from 'dayjs';
import { IOrderItem } from 'app/shared/model/order-item.model';
import { ICustomer } from 'app/shared/model/customer.model';
import { OrderStatus } from 'app/shared/model/enumerations/order-status.model';

export interface IProductOrder {
  id?: number;
  placedDate?: string;
  status?: OrderStatus;
  code?: string;
  invoiceId?: number | null;
  orderItems?: IOrderItem[] | null;
  customer?: ICustomer;
}

export const defaultValue: Readonly<IProductOrder> = {};
