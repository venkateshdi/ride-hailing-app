import * as React from 'react';
import { translate, InjectedTranslateProps, TranslationFunction } from 'react-i18next';

import "./style.scss";
import { observer } from 'mobx-react';

export interface HeaderState {
  t: TranslationFunction;
}

@translate('translations')
@observer
export class Header extends React.Component<HeaderState & InjectedTranslateProps, {}> {
  render() {
    const { t } = this.props;
    return (
      <header>
        <h1>{t('app.title')}</h1>
      </header>
    );
  }
}

export default Header;