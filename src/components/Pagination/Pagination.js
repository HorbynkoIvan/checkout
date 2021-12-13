import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useTranslation } from 'react-i18next';
import { PaginationSC } from './styled';
import { Button } from '../Buttons/Button/Button';
import { ReactComponent as ArrowIcon } from '../../assets/img/chevron-right.svg';

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [countPage] = useState(10);
  const [activeClassName, setActiveClassName] = useState('btn-selected');
  const { t } = useTranslation();
  const setCurrentPageHandler = (page) => {
    setActiveClassName('btn-selected');
    setCurrentPage(page);
  };
  const showMoreBtnClickHandler = () => {
    if (currentPage < countPage - 1) {
      setActiveClassName('show-more-selected');
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <PaginationSC>
      <Button onClick={showMoreBtnClickHandler} md>
        {t('Показать еще')}
      </Button>
      <ReactPaginate
        previousLabel={<ArrowIcon />}
        nextLabel={<ArrowIcon />}
        pageCount={countPage}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(page) => setCurrentPageHandler(page.selected)}
        forcePage={currentPage}
        containerClassName={activeClassName}
      />
    </PaginationSC>
  );
};
