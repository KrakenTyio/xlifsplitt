/// <reference types="node" />
import { ExchangeEntity, Langs, SplitModuleJSON, ValidFormats } from './interfaces';
import { MessagePort } from 'worker_threads';
declare const _default: ({ lang, entity, encoding, genDir, srcLang, projectPath, splitModule, format, port, }: {
    lang: Langs;
    entity: ExchangeEntity;
    updateState?: boolean;
    encoding: BufferEncoding;
    genDir: string;
    srcLang: Langs;
    projectPath: string;
    splitModule: SplitModuleJSON;
    format: ValidFormats;
    port?: MessagePort;
}) => boolean;
export default _default;
