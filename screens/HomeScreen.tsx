import React from 'react';
import { Text } from '@/components/ui/text';
import { useTranslation } from 'react-i18next';

interface ImportHomeScreenProps {
    navigation: any;
}

export function HomeScreen({ navigation }: ImportHomeScreenProps): JSX.Element {
    const { t, i18n } = useTranslation();

    i18n.changeLanguage('zh_CN');

    return (<Text>{t('appname')}</Text>);
}
