import React from 'react';
import {
    bool,
    node,
    arrayOf,
    oneOfType,
    func,
    number,
    string,
} from 'prop-types';
import {
    SCTitle, SCBlock, SCModal
} from './styled';
import Link from "../../Link";
import ButtonReturn from '../../Buttons/ButtonReturn';
import SocialButtonsBlock from '../../SocialButtonsBlock';
import Modal from '../Modal'

export const ModalWarDelivery = ({
                                     closeModal,
                                     opened,
                                     modalWidth = 328,
                                     title,
                                     showBtnReturn,
                                 }) => {
    return (
        <SCModal
            // onClick={handleClickOutside}
            opened={opened}
            background={'#F1F1F1'}
            borderRadius='20px'
            // className={`${opened && 'is_visible'}`}
        >
            <SCTitle>Умови доставки
                під час Війни</SCTitle>

            <SCBlock>
                <h3>🇺🇦 Доставляємо по Києву</h3>
                <ul>
                    <li>
                        на <b>ЛІВОМУ</b> березі працює <b>кур’єрська доставка</b> оплачених на сайті замовлень, а також
                        можливий
                        самовивіз
                        <b>з метро Бориспільська</b>;
                    </li>
                    <li>
                        на <b>ПРАВИЙ</b> берег можемо відправити замовлення <b>Новою Поштою</b> до діючих відділень
                        (обирайте на сайті
                        при
                        замовленні актуальне діюче відділення).
                        <div><a href="https://novaposhta.ua/news/rubric/2/id/10171">Актуальна карта діючих
                            відділень</a></div>
                        <p>❗Врахуйте, будь ласка, що через нерегулярність перевезень доставка Новою Поштою може займати
                            від 7
                            днів,
                            а відправка – 1-3 дні 🙏</p>
                    </li>
                </ul>

            </SCBlock>

            <SCBlock>
                <h3>🇺🇦 Доставляємо по Україні</h3>
                <ul>
                    <li>
                        лише оплачені на сайті замовлення;
                    </li>
                    <li>
                        до працюючих відділень <b>Нової Пошти</b> (обирайте на сайті при замовленні актуальне діюче
                        відділення).

                        <div><a href="https://novaposhta.ua/news/rubric/2/id/10171">Актуальна карта діючих
                            відділень</a></div>
                        <p>❗Врахуйте, будь ласка, що через нерегулярність перевезень доставка Новою Поштою може займати
                            від 7 днів, а відправка – 1-3 дні 🙏</p>
                    </li>
                </ul>

            </SCBlock>
        </SCModal>
    );
};

// ModalWarDelivery.propTypes = {
//   children: oneOfType([node, arrayOf(node)]).isRequired,
//   opened: bool.isRequired,
//   closeModal: func.isRequired,
//   modalWidth: number.isRequired,
//   title: string.isRequired,
//   showBtnReturn: bool,
// };
