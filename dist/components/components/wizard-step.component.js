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
import { Component, ContentChild, EventEmitter, forwardRef, HostBinding, Input, Output } from '@angular/core';
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
var WizardStepComponent = (function (_super) {
    __extends(WizardStepComponent, _super);
    /**
     * Constructor
     */
    function WizardStepComponent() {
        var _this = _super.call(this) || this;
        /**
         * @inheritDoc
         */
        _this.navigationSymbol = '';
        /**
         * @inheritDoc
         */
        _this.canExit = true;
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
        _this.completed = false;
        /**
         * @inheritDoc
         */
        _this.selected = false;
        /**
         * @inheritDoc
         */
        _this.optional = false;
        return _this;
    }
    Object.defineProperty(WizardStepComponent.prototype, "hidden", {
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
    WizardStepComponent.prototype.enter = function (direction) {
        this.stepEnter.emit(direction);
    };
    /**
     * @inheritDoc
     */
    WizardStepComponent.prototype.exit = function (direction) {
        this.stepExit.emit(direction);
    };
    WizardStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wizard-step',
                    template: "\n    <ng-content></ng-content>\n  ",
                    styles: ["\n    :host {\n      height: auto;\n      width: 100%;\n    }\n  "],
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardStepComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    WizardStepComponent.ctorParameters = function () { return []; };
    WizardStepComponent.propDecorators = {
        'titleTemplate': [{ type: ContentChild, args: [WizardStepTitleDirective,] },],
        'title': [{ type: Input },],
        'navigationSymbol': [{ type: Input },],
        'navigationSymbolFontFamily': [{ type: Input },],
        'canExit': [{ type: Input },],
        'stepEnter': [{ type: Output },],
        'stepExit': [{ type: Output },],
        'hidden': [{ type: HostBinding, args: ['hidden',] },],
    };
    return WizardStepComponent;
}(WizardStep));
export { WizardStepComponent };
//# sourceMappingURL=wizard-step.component.js.map