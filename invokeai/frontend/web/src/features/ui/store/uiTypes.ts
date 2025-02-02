import { ParameterScheduler } from 'features/parameters/types/parameterSchemas';
import { InvokeTabName } from './tabMap';

export type Coordinates = {
  x: number;
  y: number;
};

export type Dimensions = {
  width: number | string;
  height: number | string;
};

export type Rect = Coordinates & Dimensions;

export interface UIState {
  activeTab: InvokeTabName;
  shouldShowImageDetails: boolean;
  shouldUseCanvasBetaLayout: boolean;
  shouldShowExistingModelsInSearch: boolean;
  shouldUseSliders: boolean;
  shouldHidePreview: boolean;
  shouldShowProgressInViewer: boolean;
  shouldShowEmbeddingPicker: boolean;
  shouldAutoChangeDimensions: boolean;
  favoriteSchedulers: ParameterScheduler[];
  globalMenuCloseTrigger: number;
  panels: Record<string, string>;
}
