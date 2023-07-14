/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 *  Copyright 2021 Collate
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

 /**
 * A `Policy` defines control that needs to be applied across different Data Entities.
 */
export interface Policy {
    /**
     * Some system policies can't be deleted
     */
    allowDelete?: boolean;
    /**
     * Some system roles can't be edited
     */
    allowEdit?: boolean;
    /**
     * Change that led to this version of the Policy.
     */
    changeDescription?: ChangeDescription;
    /**
     * When `true` indicates the entity has been soft deleted.
     */
    deleted?: boolean;
    /**
     * A short description of the Policy, comprehensible to regular users.
     */
    description?: string;
    /**
     * System policy can't be deleted. Use this flag to disable them.
     */
    disabled?: boolean;
    /**
     * Display name for this Policy.
     */
    displayName?: string;
    /**
     * Is the policy enabled.
     */
    enabled?: boolean;
    /**
     * Name that uniquely identifies a Policy.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the resource corresponding to this entity.
     */
    href?: string;
    /**
     * Unique identifier that identifies this Policy.
     */
    id: string;
    /**
     * Location to which a policy is applied. This field is relevant only for `lifeCycle`
     * policies.
     */
    location?: EntityReference;
    /**
     * Name that uniquely identifies this Policy.
     */
    name: string;
    /**
     * Owner of this Policy.
     */
    owner?:    EntityReference;
    provider?: ProviderType;
    /**
     * Roles that use this policy.
     */
    roles?: EntityReference[];
    /**
     * Set of rules that the policy contains.
     */
    rules: Rule[];
    /**
     * Teams that use this policy directly and not through roles.
     */
    teams?: EntityReference[];
    /**
     * Last update time corresponding to the new version of the Policy in Unix epoch time
     * milliseconds.
     */
    updatedAt?: number;
    /**
     * User who made the update.
     */
    updatedBy?: string;
    /**
     * Metadata version of the Policy.
     */
    version?: number;
}

/**
 * Change that led to this version of the Policy.
 *
 * Description of the change.
 */
export interface ChangeDescription {
    /**
     * Names of fields added during the version changes.
     */
    fieldsAdded?: FieldChange[];
    /**
     * Fields deleted during the version changes with old value before deleted.
     */
    fieldsDeleted?: FieldChange[];
    /**
     * Fields modified during the version changes with old and new values.
     */
    fieldsUpdated?: FieldChange[];
    /**
     * When a change did not result in change, this could be same as the current version.
     */
    previousVersion?: number;
}

export interface FieldChange {
    /**
     * Name of the entity field that changed.
     */
    name?: string;
    /**
     * New value of the field. Note that this is a JSON string and use the corresponding field
     * type to deserialize it.
     */
    newValue?: any;
    /**
     * Previous value of the field. Note that this is a JSON string and use the corresponding
     * field type to deserialize it.
     */
    oldValue?: any;
}

/**
 * Location to which a policy is applied. This field is relevant only for `lifeCycle`
 * policies.
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * Owner of this Policy.
 *
 * Roles that use this policy.
 */
export interface EntityReference {
    /**
     * If true the entity referred to has been soft-deleted.
     */
    deleted?: boolean;
    /**
     * Optional description of entity.
     */
    description?: string;
    /**
     * Display Name that identifies this entity.
     */
    displayName?: string;
    /**
     * Fully qualified name of the entity instance. For entities such as tables, databases
     * fullyQualifiedName is returned in this field. For entities that don't have name hierarchy
     * such as `user` and `team` this will be same as the `name` field.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the entity resource.
     */
    href?: string;
    /**
     * Unique identifier that identifies an entity instance.
     */
    id: string;
    /**
     * Name of the entity instance.
     */
    name?: string;
    /**
     * Entity type/class name - Examples: `database`, `table`, `metrics`, `databaseService`,
     * `dashboardService`...
     */
    type: string;
}

/**
 * Type of provider of an entity. Some entities are provided by the `system`. Some are are
 * entities created and provided by the `user`. Typically `system` provide entities can't be
 * deleted and can only be disabled.
 */
export enum ProviderType {
    System = "system",
    User = "user",
}

/**
 * Set of rules that the policy contains.
 *
 * A set of rules associated with the Policy.
 *
 * Describes an Access Control Rule for OpenMetadata Metadata Operations. All non-null user
 * (subject) and entity (object) attributes are evaluated with logical AND.
 */
export interface Rule {
    /**
     * Expression in SpEL used for matching of a `Rule` based on entity, resource, and
     * environmental attributes.
     */
    condition?: string;
    /**
     * Description of the rule.
     */
    description?: string;
    effect:       Effect;
    /**
     * FullyQualifiedName in the form `policyName.ruleName`.
     */
    fullyQualifiedName?: string;
    /**
     * Name of this Rule.
     */
    name: string;
    /**
     * List of operation names related to the `resources`. Use `*` to include all the operations.
     */
    operations: Operation[];
    /**
     * Resources/objects related to this rule. Resources are typically `entityTypes` such as
     * `table`, `database`, etc. It also includes `non-entityType` resources such as `lineage`.
     * Use `*` to include all the resources.
     */
    resources: string[];
}

export enum Effect {
    Allow = "allow",
    Deny = "deny",
}

/**
 * This schema defines all possible operations on metadata of entities in OpenMetadata.
 */
export enum Operation {
    All = "All",
    Create = "Create",
    Delete = "Delete",
    EditAll = "EditAll",
    EditCustomFields = "EditCustomFields",
    EditDataProfile = "EditDataProfile",
    EditDescription = "EditDescription",
    EditDisplayName = "EditDisplayName",
    EditLineage = "EditLineage",
    EditOwner = "EditOwner",
    EditPolicy = "EditPolicy",
    EditQueries = "EditQueries",
    EditReviewers = "EditReviewers",
    EditRole = "EditRole",
    EditSampleData = "EditSampleData",
    EditStatus = "EditStatus",
    EditTags = "EditTags",
    EditTeams = "EditTeams",
    EditTests = "EditTests",
    EditTier = "EditTier",
    EditUsers = "EditUsers",
    ViewAll = "ViewAll",
    ViewBasic = "ViewBasic",
    ViewDataProfile = "ViewDataProfile",
    ViewQueries = "ViewQueries",
    ViewSampleData = "ViewSampleData",
    ViewTests = "ViewTests",
    ViewUsage = "ViewUsage",
}
