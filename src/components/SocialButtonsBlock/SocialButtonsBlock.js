import React from 'react';

import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { SocialButtonsBlockStyled, ContainerStyled } from './styled';
import { ButtonSocial } from '../Buttons/ButtonSocial/ButtonSocial';

import facebook from '../../assets/img/social/facebook.svg';
import google from '../../assets/img/social/google.svg';
import { FACEBOOK_API_CLIENT_ID, GOOGLE_API_CLIENT_ID } from '../../constants';
import { ServiceAuth } from '../../services/ServiceAuth';

export const SocialButtonsBlock = ({
  setErrorAuthSocial,
  closeModal,
  preloaderHandler,
}) => {
  // const cartContext = useContext(CartContext);
  const { t } = useTranslation();

  const requestSocialNetwork = (response, network) => {
    if (network === 'google' && !Object.keys(response).includes('profileObj')) {
      return;
    }
    (async () => {
      try {
        preloaderHandler(true);
        await ServiceAuth.loginWithSocial(
          network,
          response.accessToken,
          response.tokenId ? response.tokenId : null
        );
        preloaderHandler(false);

        closeModal();
        // add reload page for add-old-products modal.
        window.location.reload();

        // const newCartState = await ServiceCart.getCart();

        // cartContext.addDataCart(newCartState);
      } catch (e) {
        setErrorAuthSocial(network);
        preloaderHandler(false);
      }
    })();
  };

  return (
    <SocialButtonsBlockStyled>
      <p>{t('Войти через')}</p>
      <ContainerStyled>
        <FacebookLogin
          appId={FACEBOOK_API_CLIENT_ID}
          autoLoad={false}
          callback={(res) => requestSocialNetwork(res, 'facebook')}
          fields="email"
          render={(renderProps) => (
            <ButtonSocial
              nameSocial="Facebook"
              srcImage={facebook}
              onClick={renderProps.onClick}
            />
          )}
        />

        <GoogleLogin
          clientId={GOOGLE_API_CLIENT_ID}
          render={(renderProps) => (
            <ButtonSocial
              nameSocial="Google"
              srcImage={google}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
          buttonText="Login"
          onSuccess={(res) => requestSocialNetwork(res, 'google')}
          onFailure={(res) => requestSocialNetwork(res, 'google')}
          cookiePolicy="single_host_origin"
          scope="https://www.googleapis.com/auth/user.phonenumbers.read"
        />
      </ContainerStyled>
    </SocialButtonsBlockStyled>
  );
};

SocialButtonsBlock.propTypes = {
  setErrorAuthSocial: func,
  closeModal: func,
  preloaderHandler: func,
};
