/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:19:52 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/api-core';
import { 
  MongoConfig,
  MongoQueryBuilders, 
  MongoSource,
} from '@alien-worlds/storage-mongodb';

import { RefWorldsActionMongoMapper } from './actions/data/mappers';
import { RefWorldsActionMongoSource } from './actions/data/data-sources';
import { RefWorldsActionRepository } from './actions/domain/repositories';
import { RefWorldsContractService } from "./services/ref-worlds-contract.service";
import { RefWorldsContractServiceImpl } from "./services/ref-worlds-contract.service-impl";
import { RefWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { RefWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { RefWorldsDeltaRepository } from './deltas/domain/repositories';
import { EosRpcSourceImpl } from '@alien-worlds/eos';

export const setupRefWorldsActionRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<RefWorldsActionRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new RefWorldsActionMongoMapper();
  
  const repository = new RepositoryImpl(
    new RefWorldsActionMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<RefWorldsActionRepository>(RefWorldsActionRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupRefWorldsDeltaRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<RefWorldsDeltaRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new RefWorldsDeltaMongoMapper();
  
  const repository = new RepositoryImpl(
    new RefWorldsDeltaMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<RefWorldsDeltaRepository>(RefWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupRefWorldsContractService = (
  eosRpcSourceImpl: EosRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): RefWorldsContractService => {
  const service = new RefWorldsContractServiceImpl(
    eosRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<RefWorldsContractService>(RefWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
