import request from '@/utils/request';
import { RequestMethod } from '@/store/common';
import { N9EAPI } from '../../config/constant';

// 获取节点key
export const GetTagPairs = function (data: object) {
  return request(`${N9EAPI}/api/n9e/tag-pairs`, {
    method: RequestMethod.Post,
    data,
  });
};

// 查询 Metrics
export const GetMetrics = function (data: object) {
  return request(`${N9EAPI}/api/n9e/tag-metrics`, {
    method: RequestMethod.Post,
    data,
  });
};

// 查询 上报数据
export const GetData = function (data: object) {
  return request(`${N9EAPI}/api/n9e/query`, {
    method: RequestMethod.Post,
    data,
  });
};

export const getQueryBench = function (data?: {
  series_num: number;
  point_num: number;
}) {
  return request(`${N9EAPI}/api/n9e/query-bench`, {
    method: RequestMethod.Post,
    params: data,
  });
};

// 分享图表 存临时数据
export const SetTmpChartData = function (data: { configs: string }[]) {
  return request(`${N9EAPI}/api/n9e/charts/tmps`, {
    method: RequestMethod.Post,
    data,
  });
};
// 分享图表 读临时数据
export const GetTmpChartData = function (ids: string) {
  return request(`${N9EAPI}/api/n9e/charts/tmps?ids=${ids}`, {
    method: RequestMethod.Get,
  });
};
