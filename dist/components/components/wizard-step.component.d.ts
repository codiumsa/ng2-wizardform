import { EventEmitter } from '@angular/core';
import { MovingDirection } from '../util/moving-direction.enum';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardStepTitleDirective } from '../directives/wizard-step-title.directive';
/**
 * The `wizard-step` component is used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `title` input:
 *
 * ```html
 * <wizard-step [title]="step title" [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </wizard-step>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <wizard-step [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template wizardStepTitle>
 *        step title
 *    </ng-template>
 *    ...
 * </wizard-step>
 * ```
 *
 * ### Example
 *
 * With `title` input:
 *
 * ```html
 * <wizard-step title="Address information" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </wizard-step>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <wizard-step navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    <ng-template wizardStepTitle>
 *        Address information
 *    </ng-template>
 * </wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
export declare class WizardStepComponent extends WizardStep {
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
    canExit: ((direction: MovingDirection) => boolean) | boolean;
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
    completed: boolean;
    /**
     * @inheritDoc
     */
    selected: boolean;
    /**
     * @inheritDoc
     */
    optional: boolean;
    /**
     * Constructor
     */
    constructor();
    /**
     * @inheritDoc
     */
    enter(direction: MovingDirection): void;
    /**
     * @inheritDoc
     */
    exit(direction: MovingDirection): void;
}
