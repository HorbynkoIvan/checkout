import React, {
    useState,
    useReducer,
    useEffect,
    useMemo,
    useCallback,
} from 'react';
import {useTranslation} from 'react-i18next';
import {CheckoutContext} from '../../context';
import {ServiceCart} from '../../services/ServiceCart';
import {mobile} from '../../theme/theme';
import {
    CheckoutPageSC,
    RowSC,
    RowTitleSC,
    CheckoutLeftSC,
    HrSC,
} from './styled';
import CheckoutOrder from '../../components/CheckoutOrder';
import {TitleBlock, TitleSub} from '../../components/Title';
import UserData from '../../components/UserData';
import DeliveryAddressesList from '../../components/DeliveryAddressesList';
import DeliveryMethod from '../../components/DeliveryMethod';
import PaymentsMethods from '../../components/PaymentsMethods';
import ButtonAsLink from '../../components/Buttons/ButtonAsLink';
import Comment from '../../components/Comment';
import {ImagesGallery} from '../../components/ImagesGallery';
import ContactsList from '../../components/ContactsList';
import {ReactComponent as CommentIcon} from '../../assets/img/comment.svg';

import {
    initialStateCheckoutForm,
    reducerCheckoutForm,
    initReducerCheckoutForm,
} from '../../state/checkout/reducerCheckoutForm';
import {
    initialErrors,
    initReducerErrors,
    reducerErrorsForm,
} from '../../state/checkout/reducerErrorsForm';
import {
    reducerCheckoutData,
    initialStateCheckoutData,
    initReducerCheckoutData,
} from '../../state/checkout/reducerCheckout';
import {ServiceCustomer} from '../../services/ServiceCustomer';
import {ServiceDict} from '../../services/ServiceDict';
import {CheckoutLayout} from './CheckoutLayout';
import {pageLangParamRedesign} from '../../helpers/helpers';
import ErrorBoundry from '../../components/ErrorBoundry';
import {
    SpecialInfoBlockOversizedCheckout
} from '../../components/SpecialInfoBlocks/SpecialInfoBlockOversizedCheckout/SpecialInfoBlockOversizedCheckout';
import SpecialInfoBlockWarDelivery from '../../components/SpecialInfoBlocks/SpecialInfoBlockWarDelivery'

import ModalWarDelivery from '../../components/Modals/ModalWarDelivery'
import {useModalWar} from './hooks'

export const CheckoutPage = () => {
    const {t} = useTranslation();
    const [isComment, showComment] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [contactsAPI, setContactsAPI] = useState([]);
    const [addressesAPI, setAddressesAPI] = useState([]);
    const {isOpenModalWar, modalWarClickHandler} = useModalWar();
    const [checkoutData, dispatchCheckoutData] = useReducer(
        reducerCheckoutData,
        initialStateCheckoutData,
        initReducerCheckoutData
    );
    const [formData, dispatchForm] = useReducer(
        reducerCheckoutForm,
        initialStateCheckoutForm,
        initReducerCheckoutForm
    );
    const [errorsData, dispatchErrors] = useReducer(
        reducerErrorsForm,
        initialErrors,
        initReducerErrors
    );

    useEffect(() => {
        if (formData.cityId) {
            (async () => {
                try {
                    const response = await ServiceDict.getDeliveryMethods(
                        formData.cityId
                    );
                    dispatchCheckoutData({
                        type: 'fetch',
                        payload: {deliveryMethodsAPI: response},
                    });
                } catch (e) {
                    console.log('ServiceDict.getDeliveryMethods ', e);
                }
            })();
        }
    }, [formData.cityId]);

    useEffect(() => {
        (async () => {
            dispatchCheckoutData({type: 'fetch', payload: {isLoading: true}});
            setTimeout(async () => {
                try {
                    const {data} = await ServiceCart.getCart();
                    dispatchCheckoutData({type: 'fetch', payload: {...data}});

                    // if customer not null - user is Logged In
                    if (!data.customer) return;
                    setUserLoggedIn(true);
                } catch (e) {
                    console.log(e);
                } finally {
                    dispatchCheckoutData({type: 'fetch', payload: {isLoading: false}});
                }
            }, 3000)
        })();
    }, []);

    useEffect(() => {
        // getting contacts when user loggedin
        if (userLoggedIn) {
            (async () => {
                try {
                    const response = await ServiceCustomer.getContacts();
                    setContactsAPI(response);

                    // mocked contactsAPI
                    // setContactsAPI([
                    //   {
                    //     id: 1,
                    //     name: '???????????????????????? ???????? ????????????????',
                    //     phone_mobile: '0959097764',
                    //     email: 'asd@asd.com',
                    //   },
                    //   {
                    //     id: 2,
                    //     name: '?????????? ???????? ????????????????',
                    //     phone_mobile: '0959097764',
                    //     email: 'asd@asd.com',
                    //   },
                    //   {
                    //     id: 3,
                    //     name: '?????????????? ???????? ????????????????',
                    //     phone_mobile: '0959097764',
                    //     email: 'asd@asd.com',
                    //   },
                    // ]);
                } catch (e) {
                    console.log('ServiceCustomer.getContacts ', e);
                }
            })();
        }
    }, [userLoggedIn]);

    useEffect(() => {
        // getting addresses when user loggedin
        if (userLoggedIn) {
            (async () => {
                try {
                    const response = await ServiceCustomer.getAddresses();
                    setAddressesAPI(response);

                    // mocked addressesAPI
                    // setAddressesAPI([
                    //   {
                    //     id: 1,
                    //     title: '????. 123, 32, ??????????????, ??. ????????,',
                    //     deliveryCost: 42.5,
                    //     deliveryCostTitle: '??????????????????',
                    //     typeId: '0',
                    //     typeTitle: '???????????????????? ????????????????',
                    //     city: '????????',
                    //     cityId: '9798',
                    //     street: '??????????????',
                    //     house: '12',
                    //     flat: '4',
                    //     entrance: '4',
                    //     region: '????????????????',
                    //     intercom: '13212',
                    //     floor: '4',
                    //     elevator: 'false',
                    //   },
                    //   {
                    //     id: 2,
                    //     title: '????. 123, 32, ??????????????, ??. Poltava,',
                    //     deliveryCost: 42.5,
                    //     deliveryCostTitle: '??????????????????',
                    //     typeId: '1',
                    //     typeTitle: '???????????????????? ????????????????',
                    //     city: '??????????????',
                    //     cityId: '19447',
                    //     street: '??????????????',
                    //     house: '12',
                    //     flat: '4',
                    //     entrance: '4',
                    //     region: '????????????????',
                    //     intercom: '13212',
                    //     floor: '4',
                    //     elevator: 'false',
                    //   },
                    //   {
                    //     id: 3,
                    //     title: '????. 123, 32, ??????????????, ??. Chernigiv,',
                    //     deliveryCost: 42.5,
                    //     deliveryCostTitle: '??????????????????',
                    //     typeId: '2',
                    //     typeTitle: '???????????????????? ????????????????',
                    //     city: '????r??u????l',
                    //     cityId: '13928',
                    //     street: '??????????????',
                    //     house: '12',
                    //     flat: '4',
                    //     entrance: '4',
                    //     region: '????????????????',
                    //     intercom: '13212',
                    //     floor: '4',
                    //     elevator: 'false',
                    //   },
                    // ]);
                } catch (e) {
                    console.log('ServiceCustomer.getAddresses ', e);
                }
            })();
        }
    }, [userLoggedIn]);

    const setCheckoutData = useCallback(
        (data) => dispatchCheckoutData({type: 'update', payload: data}),
        []
    );

    const setFormData = useCallback(
        (data) =>
            // console.log('dispatchForm update');
            dispatchForm({type: 'update', payload: data}),
        []
    );

    const deleteFormData = useCallback(
        (data) => dispatchForm({type: 'deleteField', payload: data}),
        []
    );

    const setErrorsData = useCallback(
        (data) =>
            // console.log('dispatchErrors update');
            dispatchErrors({type: 'update', payload: data}),
        []
    );

    const formDataValue = useMemo(
        () => ({
            setCheckoutData,
            formData,
            deleteFormData,
            setFormData,
            errorsData,
            setErrorsData,
        }),
        [formData, setFormData, errorsData]
    );

    return (
        <CheckoutContext.Provider
            value={{...formDataValue, checkoutData, userLoggedIn}}
        >
            <CheckoutLayout>
                <ModalWarDelivery
                    opened={isOpenModalWar}
                    closeModal={modalWarClickHandler}
                />
                <CheckoutPageSC>
                    <TitleBlock>
                        {t('???????????????????? ????????????')} <span>???{checkoutData.orderNumber}</span>
                    </TitleBlock>
                    {mobile && (
                        <>
                            <RowTitleSC>
                                <TitleSub>{t('??????????')}</TitleSub>
                                <ButtonAsLink
                                    className="link"
                                    onClick={() => {
                                        window.location.href = `${pageLangParamRedesign}cart`;
                                    }}
                                >
                                    {t('??????????????????????????')}
                                </ButtonAsLink>
                            </RowTitleSC>
                            <ImagesGallery data={checkoutData.products || []}/>
                            <HrSC/>
                        </>
                    )}
                    <RowSC>
                        <CheckoutLeftSC>
                            <TitleBlock>{t('???????????? ????????????????????')}</TitleBlock>
                            {userLoggedIn ? (
                                <ContactsList contactsAPI={contactsAPI}/>
                            ) : (
                                <ErrorBoundry>
                                    <UserData/>
                                </ErrorBoundry>
                            )}
                            <HrSC/>
                            <TitleBlock>{t('???????????? ????????????????')}</TitleBlock>

                            <SpecialInfoBlockWarDelivery onClick={modalWarClickHandler}/>

                            {checkoutData.hasPreorderedProducts && (
                                <SpecialInfoBlockOversizedCheckout/>
                            )}

                            {userLoggedIn && addressesAPI.length > 0 ? (
                                <DeliveryAddressesList addressesAPI={addressesAPI}/>
                            ) : (
                                <DeliveryMethod/>
                            )}
                            <HrSC/>
                            <PaymentsMethods/>
                            <HrSC/>
                            {!isComment && (
                                <ButtonAsLink
                                    className="comment_link"
                                    icon={<CommentIcon/>}
                                    onClick={() => showComment(true)}
                                >
                                    {t('???????????????? ?????????????????????? ?? ????????????')}
                                </ButtonAsLink>
                            )}
                            {isComment && <Comment className="comment"/>}
                        </CheckoutLeftSC>
                        <CheckoutOrder/>
                    </RowSC>
                </CheckoutPageSC>
            </CheckoutLayout>
        </CheckoutContext.Provider>
    );
};

CheckoutPage.propTypes = {};
