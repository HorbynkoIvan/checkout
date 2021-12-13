import React, { useEffect, useState } from 'react';
import {
  PaginationCustomButtonSC,
  PaginationCustomChevronLeftSC,
  PaginationCustomSC,
} from './styled';
import { Button } from '../Buttons/Button/Button';
import { ReactComponent as ArrowIcon } from '../../assets/img/chevron-right.svg';

export const PaginationCustom = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countOrderShow] = useState(10);

  const pageNumbers = [];

  const currentPostList = () => {
    const indexOfLastPost = currentPage * countOrderShow;
    const indexOfFirstPost = indexOfLastPost - countOrderShow;

    return data.slice(indexOfFirstPost, indexOfLastPost);
  };

  useEffect(() => {
    const result = [];
    for (let i = 0; i < 100; i++) {
      result.push(i);
    }
    setData(result);
  }, []);

  for (let i = 1; i <= Math.ceil(data.length / countOrderShow); i++) {
    pageNumbers.push(i);
  }

  const clickHandler = (item) => {
    setCurrentPage(item);
  };

  console.log(currentPostList());
  console.log(pageNumbers);
  console.log(currentPage);

  const dataForItems = (() => {
    let temp = [];
    if (pageNumbers.length < 8) {
      if (pageNumbers.length > 5) {
        if (currentPage > 1) {
          temp.push({
            arrowLeft: true,
            pageNumber: currentPage - 1,
          });
        }
        if (currentPage > 3) {
          temp.push({
            isActive: false,
            pageNumber: pageNumbers[0],
          });
          temp.push({
            dots: true,
          });
        }

        for (let i = 0; i < pageNumbers.length; i++) {
          if (currentPage < 4 && i < 4) {
            if (currentPage - 1 === i) {
              temp.push({
                isActive: true,
                pageNumber: pageNumbers[i],
              });
            } else {
              temp.push({
                isActive: false,
                pageNumber: pageNumbers[i],
              });
            }
          }

          if (currentPage > 3 && i > 3) {
            if (currentPage === i) {
              temp.push({
                isActive: true,
                pageNumber: pageNumbers[i - 1],
              });
            } else {
              temp.push({
                isActive: false,
                pageNumber: pageNumbers[i - 1],
              });
            }
          }
        }

        if (currentPage < 4) {
          temp.push({
            dots: true,
          });

          temp.push({
            isActive: false,
            pageNumber: pageNumbers[pageNumbers.length - 1],
          });
        } else if (currentPage === pageNumbers[pageNumbers.length - 1]) {
          temp.push({
            isActive: true,
            pageNumber: pageNumbers[pageNumbers.length - 1],
          });
        } else {
          temp.push({
            isActive: false,
            pageNumber: pageNumbers[pageNumbers.length - 1],
          });
        }
        if (currentPage < pageNumbers.length) {
          temp.push({
            arrowRight: true,
            pageNumber: currentPage + 1,
          });
        }
      } else {
        for (let i = 0; i < pageNumbers.length; i++) {
          if (currentPage - 1 === i) {
            temp.push({
              isActive: true,
              pageNumber: pageNumbers[i],
            });
          } else {
            temp.push({
              isActive: false,
              pageNumber: pageNumbers[i],
            });
          }
        }
      }
    }
    if (pageNumbers.length >= 8) {
      for (let i = 0; i < 4; i++) {
        if (currentPage === pageNumbers[i]) {
          if (i > 0) {
            temp.push({
              arrowLeft: true,
              pageNumber: currentPage - 1,
            });
          }

          for (let k = 0; k < 4; k++) {
            if (i === k) {
              temp.push({
                isActive: true,
                pageNumber: pageNumbers[k],
              });
            } else {
              temp.push({
                isActive: false,
                pageNumber: pageNumbers[k],
              });
            }
          }
          temp.push({
            dots: true,
          });

          temp.push({
            pageNumber: pageNumbers[pageNumbers.length - 1],
          });
          temp.push({
            arrowRight: true,
            pageNumber: currentPage + 1,
          });
        }
      }

      if (
        currentPage > 4 &&
        currentPage < pageNumbers[pageNumbers.length - 4]
      ) {
        temp = [
          {
            arrowLeft: true,
            pageNumber: currentPage - 1,
          },
          {
            isActive: false,
            pageNumber: pageNumbers[0],
          },
          {
            dots: true,
          },
          {
            isActive: false,
            pageNumber: currentPage - 1,
          },
          {
            isActive: true,
            pageNumber: currentPage,
          },
          {
            isActive: false,
            pageNumber: currentPage + 1,
          },
          {
            dots: true,
          },
          {
            isActive: false,
            pageNumber: pageNumbers[pageNumbers.length - 1],
          },
          {
            arrowRight: true,
            pageNumber: currentPage + 1,
          },
        ];
      }

      for (let i = 4; i > 0; i--) {
        if (currentPage === pageNumbers[pageNumbers.length - i]) {
          temp.push({
            arrowLeft: true,
            pageNumber: currentPage - 1,
          });
          temp.push({
            pageNumber: pageNumbers[0],
          });
          temp.push({
            dots: true,
          });
          for (let k = 4; k > 0; k--) {
            if (i === k) {
              temp.push({
                isActive: true,
                pageNumber: pageNumbers[pageNumbers.length - k],
              });
            } else {
              temp.push({
                isActive: false,
                pageNumber: pageNumbers[pageNumbers.length - k],
              });
            }
          }
          if (i > 1) {
            temp.push({
              arrowRight: true,
              pageNumber: currentPage + 1,
            });
          }
        }
      }
    }
    return temp;
  })();

  const clickHandlerShowMore = () => {
    console.log('Показать еще');
  };

  const items = dataForItems.map((item, i) => (
    <PaginationCustomButtonSC
      isActive={item.isActive}
      key={i}
      type="button"
      onClick={() => item.pageNumber && clickHandler(item.pageNumber)}
      dots={item.dots}
    >
      {!item.arrowRight &&
        !item.arrowLeft &&
        item.pageNumber &&
        item.pageNumber}
      {item.arrowRight && <ArrowIcon />}
      {item.arrowLeft && <PaginationCustomChevronLeftSC />}
      {item.dots && '...'}
    </PaginationCustomButtonSC>
  ));

  return (
    <PaginationCustomSC>
      <Button onClick={clickHandlerShowMore} md>
        Показать еще
      </Button>

      <div>{items}</div>
    </PaginationCustomSC>
  );
};
