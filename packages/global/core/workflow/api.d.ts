import type { EmbeddingModelItemType } from '../ai/model.d';
import { NodeInputKeyEnum } from './constants';

export type SelectedDatasetType = {
  datasetId: string;
  avatar: string;
  name: string;
  vectorModel: EmbeddingModelItemType;
}[];

export type HttpBodyType<T = Record<string, any>> = {
  // [NodeInputKeyEnum.addInputParam]: Record<string, any>;
} & T;
export type HttpQueryType = {
  appId: string;
  chatId?: string;
  responseChatItemId?: string;
  variables: Record<string, any>;
  [key: string]: any;
};

/* http node */
export type HttpParamAndHeaderItemType = {
  key: string;
  type: string;
  value: string;
};
