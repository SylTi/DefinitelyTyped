import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { ObjectEvent } from 'ol/Object';
import { AttributionLike } from 'ol/source/Source';
import VectorSource, { VectorSourceEvent } from 'ol/source/Vector';
export default class Cluster extends VectorSource {
    constructor(options: Options);
    protected distance: number;
    protected features: Feature[];
    protected geometryFunction: ((param0: Feature) => Point);
    protected resolution: number;
    protected source: VectorSource;
    protected cluster(): void;
    protected createCluster(features: Feature[]): Feature;
    getDistance(): number;
    getSource(): VectorSource;
    setDistance(distance: number): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): void;
    on(type: 'clear', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'clear', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'clear', listener: (evt: VectorSourceEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): void;
}
export interface Options {
    attributions?: AttributionLike;
    distance?: number;
    geometryFunction?: ((param0: Feature) => Point);
    source: VectorSource;
    wrapX?: boolean;
}
