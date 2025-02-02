import { SelectItem } from '@mantine/core';
import { RootState } from 'app/store/store';
import { useAppDispatch, useAppSelector } from 'app/store/storeHooks';
import IAIInformationalPopover from 'common/components/IAIInformationalPopover/IAIInformationalPopover';
import IAIMantineSelect from 'common/components/IAIMantineSelect';
import { setMaskBlurMethod } from 'features/parameters/store/generationSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type MaskBlurMethods = 'box' | 'gaussian';

const maskBlurMethods: SelectItem[] = [
  { label: 'Box Blur', value: 'box' },
  { label: 'Gaussian Blur', value: 'gaussian' },
];

export default function ParamMaskBlurMethod() {
  const maskBlurMethod = useAppSelector(
    (state: RootState) => state.generation.maskBlurMethod
  );
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleMaskBlurMethodChange = useCallback(
    (v: string | null) => {
      if (!v) {
        return;
      }
      dispatch(setMaskBlurMethod(v as MaskBlurMethods));
    },
    [dispatch]
  );

  return (
    <IAIInformationalPopover feature="compositingBlurMethod">
      <IAIMantineSelect
        value={maskBlurMethod}
        onChange={handleMaskBlurMethodChange}
        label={t('parameters.maskBlurMethod')}
        data={maskBlurMethods}
      />
    </IAIInformationalPopover>
  );
}
