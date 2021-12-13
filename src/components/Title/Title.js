import React from 'react';
import { any } from 'prop-types';
import {
  TitlePageStyled,
  TitleBlockStyled,
  TitleSubStyled,
  TitleInnerStyled,
  TitleLabelStyled,
} from './styled';

export const TitlePage = ({ children }) => (
  <TitlePageStyled className="title_page">{children}</TitlePageStyled>
);
export const TitleBlock = ({ children }) => (
  <TitleBlockStyled className="title_block">{children}</TitleBlockStyled>
);
export const TitleSub = ({ children }) => (
  <TitleSubStyled className="title_sub">{children}</TitleSubStyled>
);
export const TitleInner = ({ children }) => (
  <TitleInnerStyled className="title_inner">{children}</TitleInnerStyled>
);
export const TitleLabel = ({ children }) => (
  <TitleLabelStyled className="title_label">{children}</TitleLabelStyled>
);

TitlePage.propTypes = {
  children: any,
};

TitleBlock.propTypes = {
  children: any,
};

TitleSub.propTypes = {
  children: any,
};

TitleInner.propTypes = {
  children: any,
};

TitleLabel.propTypes = {
  children: any,
};
