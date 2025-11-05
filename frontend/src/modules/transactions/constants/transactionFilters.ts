import type { Transaction } from '../types/transaction';
import type { TransactionFilters } from '../types/filter';
import { useMemo } from 'react';
import { useManageData } from '../hooks/useManageData';

export const INITIAL_TRANSACTION_FILTERS: TransactionFilters = {
  search: '',
  category: '',
  paymentMethod: '',
  type: 'all',
  date_from: '',
  date_to: '',
};

export const useAvailableFilters = () => {
  const { data } = useManageData();

  const { categories, paymentMethods } = useMemo(() => {
    const categoriesSet = new Set<string>();
    const paymentMethodsSet = new Set<string>();

    data.forEach((transaction: Transaction) => {
      if (transaction.category) categoriesSet.add(transaction.category);
      if (transaction.paymentMethod) paymentMethodsSet.add(transaction.paymentMethod);
    });

    return {
      categories: Array.from(categoriesSet),
      paymentMethods: Array.from(paymentMethodsSet),
    };
  }, [data]);

  return { categories, paymentMethods };
};