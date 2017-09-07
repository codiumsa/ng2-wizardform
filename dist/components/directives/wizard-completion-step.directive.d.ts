import { EventEmitter } from '@angular/core';
import { MovingDirection } from '../util/moving-direction.enum';
import { WizardComponent } from '../components/wizard.component';
import { WizardStepTitleDirective } from './wizard-step-title.directive';
import { WizardCompletionStep } from '../util/wizard-completion-step.inferface';
/**
 * The `wizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
 * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard` amd all steps inside the `wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <div wizardCompletionStep [title]="title of the wizard step" [navigationSymbol]="navigation symbol"
 *    [navigationSymbolFontFamily]="navigation symbol font family"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * ```html
 * <div wizardCompletionStep title="Step 1" navigationSymbol="1">
 *    ...
 * </div>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <div wizardCompletionStep title="Step 1" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
export declare class WizardCompletionStepDirective extends WizardCompletionStep {
    private wizard;
    /**
     * @inheritDoc
     */
    titleTemplate: WizardStepTitleDirective;
    /**
     * @inheritDoc
     */
    title: string;
    /**
     * @inheritDoc
     */
    navigationSymbol: string;
    /**
     * @inheritDoc
     */
    navigationSymbolFontFamily: string;
    /**
     * @inheritDoc
     */
    stepEnter: EventEmitter<MovingDirection>;
    /**
     * @inheritDoc
     */
    stepExit: EventEmitter<MovingDirection>;
    /**
     * @inheritDoc
     */
    readonly hidden: boolean;
    /**
     * @inheritDoc
     */
    completed: false;
    /**
     * @inheritDoc
     */
    selected: boolean;
    /**
     * @inheritDoc
     */
    optional: boolean;
    /**
     * @inheritDoc
     */
    canExit: ((direction: MovingDirection) => boolean) | boolean;
    /**
     * Constructor
     * @param wizard The [[WizardComponent]], this completion step is contained inside
     */
    constructor(wizard: WizardComponent);
    /**
     * @inheritDoc
     */
    enter(direction: MovingDirection): void;
    /**
     * @inheritDoc
     */
    exit(direction: MovingDirection): void;
}
