/**
 * Created by marc on 20.05.17.
 */
import { EventEmitter } from '@angular/core';
import { MovingDirection } from '../util/moving-direction.enum';
import { WizardComponent } from './wizard.component';
import { WizardStepTitleDirective } from '../directives/wizard-step-title.directive';
import { WizardCompletionStep } from '../util/wizard-completion-step.inferface';
/**
 * The `wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `wizard-completion-step` automatically sets the `wizard` amd all steps inside the `wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <wizard-completion-step [title]="title of the wizard step" [navigationSymbol]="navigation symbol"
 *    [navigationSymbolFontFamily]="navigation symbol font family"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <wizard-completion-step title="Step 1" navigationSymbol="1">
 *    ...
 * </wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <wizard-completion-step title="Step 1" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
export declare class WizardCompletionStepComponent extends WizardCompletionStep {
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
