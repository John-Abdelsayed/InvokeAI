import { NativeSelect } from '@mantine/core';
import { useAppDispatch, useAppSelector } from 'app/store/storeHooks';
import { fieldValueChanged } from 'features/nodes/store/nodesSlice';
import {
  ModelInputFieldTemplate,
  ModelInputFieldValue,
} from 'features/nodes/types/types';

import { modelSelector } from 'features/system/store/modelSelectors';
import { ChangeEvent, memo } from 'react';
import { FieldComponentProps } from './types';

const ModelInputFieldComponent = (
  props: FieldComponentProps<ModelInputFieldValue, ModelInputFieldTemplate>
) => {
  const { nodeId, field } = props;

  const dispatch = useAppDispatch();

  const { sd1ModelDropDownData, sd2ModelDropdownData } =
    useAppSelector(modelSelector);

  const handleValueChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      fieldValueChanged({
        nodeId,
        fieldName: field.name,
        value: e.target.value,
      })
    );
  };

  return (
    <NativeSelect
      onChange={handleValueChanged}
      value={field.value || sd1ModelDropDownData[0].value}
      data={sd1ModelDropDownData.concat(sd2ModelDropdownData)}
    ></NativeSelect>
  );
};

export default memo(ModelInputFieldComponent);
