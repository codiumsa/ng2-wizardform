/**
 * Created by marc on 20.05.17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, ContentChild, EventEmitter, forwardRef, HostBinding, Inject, Input, Output } from '@angular/core';
import { WizardComponent } from './wizard.component';
import { WizardStep } from '../util/wizard-step.interface';
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
var WizardCompletionStepComponent = (function (_super) {
    __extends(WizardCompletionStepComponent, _super);
    /**
     * Constructor
     * @param wizard The [[WizardComponent]], this completion step is contained inside
     */
    /* istanbul ignore next */
    function WizardCompletionStepComponent(wizard) {
        var _this = _super.call(this) || this;
        _this.wizard = wizard;
        /**
         * @inheritDoc
         */
        _this.navigationSymbol = '';
        /**
         * @inheritDoc
         */
        _this.stepEnter = new EventEmitter();
        /**
         * @inheritDoc
         */
        _this.stepExit = new EventEmitter();
        /**
         * @inheritDoc
         */
        _this.selected = false;
        /**
         * @inheritDoc
         */
        _this.optional = false;
        /**
         * @inheritDoc
         */
        _this.canExit = false;
        return _this;
    }
    Object.defineProperty(WizardCompletionStepComponent.prototype, "hidden", {
        /**
         * @inheritDoc
         */
        get: function () {
            return !this.selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    WizardCompletionStepComponent.prototype.enter = function (direction) {
        this.wizard.completed = true;
        this.stepEnter.emit(direction);
    };
    /**
     * @inheritDoc
     */
    WizardCompletionStepComponent.prototype.exit = function (direction) {
        this.wizard.completed = false;
        this.stepExit.emit(direction);
    };
    WizardCompletionStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wizard-completion-step',
                    template: "\n    <ng-content></ng-content>\n  ",
                    styles: ["\n    :host {\n      height: auto;\n      width: 100%;\n    }\n  "],
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardCompletionStepComponent; }) },
                        { provide: WizardCompletionStep, useExisting: forwardRef(function () { return WizardCompletionStepComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    WizardCompletionStepComponent.ctorParameters = function () { return [
        { type: WizardComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return WizardComponent; }),] },] },
    ]; };
    WizardCompletionStepComponent.propDecorators = {
        'titleTemplate': [{ type: ContentChild, args: [WizardStepTitleDirective,] },],
        'title': [{ type: Input },],
        'navigationSymbol': [{ type: Input },],
        'navigationSymbolFontFamily': [{ type: Input },],
        'stepEnter': [{ type: Output },],
        'hidden': [{ type: HostBinding, args: ['hidden',] },],
    };
    return WizardCompletionStepComponent;
}(WizardCompletionStep));
export { WizardCompletionStepComponent };
//# sourceMappingURL=wizard-completion-step.component.js.map