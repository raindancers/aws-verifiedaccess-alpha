# aws-verifiedaccess-alpha
Verified Access

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessGroup <a name="AccessGroup" id="aws-verifiedaccess-alpha.AccessGroup"></a>

- *Implements:* <a href="#aws-verifiedaccess-alpha.IAccessGroup">IAccessGroup</a>

Verified Access Group.

#### Initializers <a name="Initializers" id="aws-verifiedaccess-alpha.AccessGroup.Initializer"></a>

```typescript
import { AccessGroup } from 'aws-verifiedaccess-alpha'

new AccessGroup(scope: Construct, id: string, props: AccessGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | Id of the Access Group. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.Initializer.parameter.props">props</a></code> | <code><a href="#aws-verifiedaccess-alpha.AccessGroupProps">AccessGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.AccessGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.AccessGroup.Initializer.parameter.id"></a>

- *Type:* string

Id of the Access Group.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.AccessGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.AccessGroupProps">AccessGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.share">share</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="aws-verifiedaccess-alpha.AccessGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-verifiedaccess-alpha.AccessGroup.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-verifiedaccess-alpha.AccessGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `share` <a name="share" id="aws-verifiedaccess-alpha.AccessGroup.share"></a>

```typescript
public share(name: string, principals: string[]): void
```

###### `name`<sup>Required</sup> <a name="name" id="aws-verifiedaccess-alpha.AccessGroup.share.parameter.name"></a>

- *Type:* string

---

###### `principals`<sup>Required</sup> <a name="principals" id="aws-verifiedaccess-alpha.AccessGroup.share.parameter.principals"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.fromDescription">fromDescription</a></code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.fromId">fromId</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-verifiedaccess-alpha.AccessGroup.isConstruct"></a>

```typescript
import { AccessGroup } from 'aws-verifiedaccess-alpha'

AccessGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-verifiedaccess-alpha.AccessGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-verifiedaccess-alpha.AccessGroup.isOwnedResource"></a>

```typescript
import { AccessGroup } from 'aws-verifiedaccess-alpha'

AccessGroup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.AccessGroup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-verifiedaccess-alpha.AccessGroup.isResource"></a>

```typescript
import { AccessGroup } from 'aws-verifiedaccess-alpha'

AccessGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.AccessGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromDescription` <a name="fromDescription" id="aws-verifiedaccess-alpha.AccessGroup.fromDescription"></a>

```typescript
import { AccessGroup } from 'aws-verifiedaccess-alpha'

AccessGroup.fromDescription(scope: Construct, id: string, description: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.AccessGroup.fromDescription.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.AccessGroup.fromDescription.parameter.id"></a>

- *Type:* string

---

###### `description`<sup>Required</sup> <a name="description" id="aws-verifiedaccess-alpha.AccessGroup.fromDescription.parameter.description"></a>

- *Type:* string

---

##### `fromId` <a name="fromId" id="aws-verifiedaccess-alpha.AccessGroup.fromId"></a>

```typescript
import { AccessGroup } from 'aws-verifiedaccess-alpha'

AccessGroup.fromId(scope: Construct, id: string, accessGroupId: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.AccessGroup.fromId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.AccessGroup.fromId.parameter.id"></a>

- *Type:* string

---

###### `accessGroupId`<sup>Required</sup> <a name="accessGroupId" id="aws-verifiedaccess-alpha.AccessGroup.fromId.parameter.accessGroupId"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroup.property.id">id</a></code> | <code>string</code> | Id of the Access Group. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-verifiedaccess-alpha.AccessGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-verifiedaccess-alpha.AccessGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-verifiedaccess-alpha.AccessGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `description`<sup>Required</sup> <a name="description" id="aws-verifiedaccess-alpha.AccessGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.AccessGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Id of the Access Group.

---


### AccessGroupEndpoint <a name="AccessGroupEndpoint" id="aws-verifiedaccess-alpha.AccessGroupEndpoint"></a>

- *Implements:* <a href="#aws-verifiedaccess-alpha.IAccessEndpoint">IAccessEndpoint</a>

Create an Acess Endpoint.

#### Initializers <a name="Initializers" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.Initializer"></a>

```typescript
import { AccessGroupEndpoint } from 'aws-verifiedaccess-alpha'

new AccessGroupEndpoint(scope: Construct, id: string, props: AccessEndpointProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The id of the endpoint. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.Initializer.parameter.props">props</a></code> | <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps">AccessEndpointProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The id of the endpoint.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.AccessEndpointProps">AccessEndpointProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.isConstruct"></a>

```typescript
import { AccessGroupEndpoint } from 'aws-verifiedaccess-alpha'

AccessGroupEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.isOwnedResource"></a>

```typescript
import { AccessGroupEndpoint } from 'aws-verifiedaccess-alpha'

AccessGroupEndpoint.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.isResource"></a>

```typescript
import { AccessGroupEndpoint } from 'aws-verifiedaccess-alpha'

AccessGroupEndpoint.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint.property.id">id</a></code> | <code>string</code> | The id of the endpoint. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.AccessGroupEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The id of the endpoint.

---


### AccessInstance <a name="AccessInstance" id="aws-verifiedaccess-alpha.AccessInstance"></a>

- *Implements:* <a href="#aws-verifiedaccess-alpha.IAccessInstance">IAccessInstance</a>

Creates an AccessInstance.

#### Initializers <a name="Initializers" id="aws-verifiedaccess-alpha.AccessInstance.Initializer"></a>

```typescript
import { AccessInstance } from 'aws-verifiedaccess-alpha'

new AccessInstance(scope: Construct, id: string, props: AccessInstanceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | acessId. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.Initializer.parameter.props">props</a></code> | <code><a href="#aws-verifiedaccess-alpha.AccessInstanceProps">AccessInstanceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.AccessInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.AccessInstance.Initializer.parameter.id"></a>

- *Type:* string

acessId.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.AccessInstance.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.AccessInstanceProps">AccessInstanceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-verifiedaccess-alpha.AccessInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-verifiedaccess-alpha.AccessInstance.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-verifiedaccess-alpha.AccessInstance.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-verifiedaccess-alpha.AccessInstance.isConstruct"></a>

```typescript
import { AccessInstance } from 'aws-verifiedaccess-alpha'

AccessInstance.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-verifiedaccess-alpha.AccessInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-verifiedaccess-alpha.AccessInstance.isOwnedResource"></a>

```typescript
import { AccessInstance } from 'aws-verifiedaccess-alpha'

AccessInstance.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.AccessInstance.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-verifiedaccess-alpha.AccessInstance.isResource"></a>

```typescript
import { AccessInstance } from 'aws-verifiedaccess-alpha'

AccessInstance.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.AccessInstance.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstance.property.id">id</a></code> | <code>string</code> | acessId. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-verifiedaccess-alpha.AccessInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-verifiedaccess-alpha.AccessInstance.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-verifiedaccess-alpha.AccessInstance.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.AccessInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

acessId.

---


### AvaPolicy <a name="AvaPolicy" id="aws-verifiedaccess-alpha.AvaPolicy"></a>

- *Implements:* <a href="#aws-verifiedaccess-alpha.IAvaPolicy">IAvaPolicy</a>

Creates Identity Store Group.

#### Initializers <a name="Initializers" id="aws-verifiedaccess-alpha.AvaPolicy.Initializer"></a>

```typescript
import { AvaPolicy } from 'aws-verifiedaccess-alpha'

new AvaPolicy(scope: Construct, id: string, props: AvaPolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.Initializer.parameter.props">props</a></code> | <code><a href="#aws-verifiedaccess-alpha.AvaPolicyProps">AvaPolicyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.AvaPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.AvaPolicy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.AvaPolicy.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.AvaPolicyProps">AvaPolicyProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-verifiedaccess-alpha.AvaPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-verifiedaccess-alpha.AvaPolicy.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-verifiedaccess-alpha.AvaPolicy.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-verifiedaccess-alpha.AvaPolicy.isConstruct"></a>

```typescript
import { AvaPolicy } from 'aws-verifiedaccess-alpha'

AvaPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-verifiedaccess-alpha.AvaPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-verifiedaccess-alpha.AvaPolicy.isOwnedResource"></a>

```typescript
import { AvaPolicy } from 'aws-verifiedaccess-alpha'

AvaPolicy.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.AvaPolicy.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-verifiedaccess-alpha.AvaPolicy.isResource"></a>

```typescript
import { AvaPolicy } from 'aws-verifiedaccess-alpha'

AvaPolicy.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.AvaPolicy.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicy.property.policy">policy</a></code> | <code>string</code> | The policy string. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-verifiedaccess-alpha.AvaPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-verifiedaccess-alpha.AvaPolicy.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-verifiedaccess-alpha.AvaPolicy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policy`<sup>Required</sup> <a name="policy" id="aws-verifiedaccess-alpha.AvaPolicy.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

The policy string.

---


### Group <a name="Group" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group"></a>

- *Implements:* aws-verifiedaccess-alpha.iamIdentityCenter.IGroup

Creates Identity Store Group.

#### Initializers <a name="Initializers" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.Initializer"></a>

```typescript
import { iamIdentityCenter } from 'aws-verifiedaccess-alpha'

new iamIdentityCenter.Group(scope: Construct, id: string, props: GroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.Initializer.parameter.id">id</a></code> | <code>string</code> | Id of the Group. |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.Initializer.parameter.props">props</a></code> | <code>aws-verifiedaccess-alpha.iamIdentityCenter.GroupProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.Initializer.parameter.id"></a>

- *Type:* string

Id of the Group.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.Initializer.parameter.props"></a>

- *Type:* aws-verifiedaccess-alpha.iamIdentityCenter.GroupProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.isConstruct"></a>

```typescript
import { iamIdentityCenter } from 'aws-verifiedaccess-alpha'

iamIdentityCenter.Group.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.isOwnedResource"></a>

```typescript
import { iamIdentityCenter } from 'aws-verifiedaccess-alpha'

iamIdentityCenter.Group.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.isResource"></a>

```typescript
import { iamIdentityCenter } from 'aws-verifiedaccess-alpha'

iamIdentityCenter.Group.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.property.id">id</a></code> | <code>string</code> | The id of the TrustProvider. |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.Group.property.name">name</a></code> | <code>string</code> | The policy ReferenceName. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The id of the TrustProvider.

---

##### `name`<sup>Required</sup> <a name="name" id="aws-verifiedaccess-alpha.iamIdentityCenter.Group.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The policy ReferenceName.

---


### TrustProvider <a name="TrustProvider" id="aws-verifiedaccess-alpha.TrustProvider"></a>

- *Implements:* <a href="#aws-verifiedaccess-alpha.ITrustProvider">ITrustProvider</a>

Creates a Trust Provider.

#### Initializers <a name="Initializers" id="aws-verifiedaccess-alpha.TrustProvider.Initializer"></a>

```typescript
import { TrustProvider } from 'aws-verifiedaccess-alpha'

new TrustProvider(scope: Construct, id: string, props: TrustProviderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The Id of the Trust Provider. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.Initializer.parameter.props">props</a></code> | <code><a href="#aws-verifiedaccess-alpha.TrustProviderProps">TrustProviderProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.TrustProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.TrustProvider.Initializer.parameter.id"></a>

- *Type:* string

The Id of the Trust Provider.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.TrustProvider.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.TrustProviderProps">TrustProviderProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-verifiedaccess-alpha.TrustProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-verifiedaccess-alpha.TrustProvider.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-verifiedaccess-alpha.TrustProvider.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.crowdstrike">crowdstrike</a></code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.iamIdentityCenter">iamIdentityCenter</a></code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.jamf">jamf</a></code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.oidc">oidc</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-verifiedaccess-alpha.TrustProvider.isConstruct"></a>

```typescript
import { TrustProvider } from 'aws-verifiedaccess-alpha'

TrustProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-verifiedaccess-alpha.TrustProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-verifiedaccess-alpha.TrustProvider.isOwnedResource"></a>

```typescript
import { TrustProvider } from 'aws-verifiedaccess-alpha'

TrustProvider.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.TrustProvider.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-verifiedaccess-alpha.TrustProvider.isResource"></a>

```typescript
import { TrustProvider } from 'aws-verifiedaccess-alpha'

TrustProvider.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-verifiedaccess-alpha.TrustProvider.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `crowdstrike` <a name="crowdstrike" id="aws-verifiedaccess-alpha.TrustProvider.crowdstrike"></a>

```typescript
import { TrustProvider } from 'aws-verifiedaccess-alpha'

TrustProvider.crowdstrike(scope: Construct, id: string, props: DeviceTrustProviderProps)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.TrustProvider.crowdstrike.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.TrustProvider.crowdstrike.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.TrustProvider.crowdstrike.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.DeviceTrustProviderProps">DeviceTrustProviderProps</a>

---

##### `iamIdentityCenter` <a name="iamIdentityCenter" id="aws-verifiedaccess-alpha.TrustProvider.iamIdentityCenter"></a>

```typescript
import { TrustProvider } from 'aws-verifiedaccess-alpha'

TrustProvider.iamIdentityCenter(scope: Construct, id: string, props: IamIdentityTrustProps)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.TrustProvider.iamIdentityCenter.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.TrustProvider.iamIdentityCenter.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.TrustProvider.iamIdentityCenter.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.IamIdentityTrustProps">IamIdentityTrustProps</a>

---

##### `jamf` <a name="jamf" id="aws-verifiedaccess-alpha.TrustProvider.jamf"></a>

```typescript
import { TrustProvider } from 'aws-verifiedaccess-alpha'

TrustProvider.jamf(scope: Construct, id: string, props: DeviceTrustProviderProps)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.TrustProvider.jamf.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.TrustProvider.jamf.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.TrustProvider.jamf.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.DeviceTrustProviderProps">DeviceTrustProviderProps</a>

---

##### `oidc` <a name="oidc" id="aws-verifiedaccess-alpha.TrustProvider.oidc"></a>

```typescript
import { TrustProvider } from 'aws-verifiedaccess-alpha'

TrustProvider.oidc(scope: Construct, id: string, props: OidcTrustProps)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-verifiedaccess-alpha.TrustProvider.oidc.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.TrustProvider.oidc.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.TrustProvider.oidc.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.OidcTrustProps">OidcTrustProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.property.id">id</a></code> | <code>string</code> | The id of the TrustProvider. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.property.policyReferenceName">policyReferenceName</a></code> | <code>string</code> | The policy ReferenceName. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProvider.property.type">type</a></code> | <code><a href="#aws-verifiedaccess-alpha.TrustProviderType">TrustProviderType</a></code> | The TrustProviderType. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-verifiedaccess-alpha.TrustProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-verifiedaccess-alpha.TrustProvider.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-verifiedaccess-alpha.TrustProvider.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.TrustProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The id of the TrustProvider.

---

##### `policyReferenceName`<sup>Required</sup> <a name="policyReferenceName" id="aws-verifiedaccess-alpha.TrustProvider.property.policyReferenceName"></a>

```typescript
public readonly policyReferenceName: string;
```

- *Type:* string

The policy ReferenceName.

---

##### `type`<sup>Required</sup> <a name="type" id="aws-verifiedaccess-alpha.TrustProvider.property.type"></a>

```typescript
public readonly type: TrustProviderType;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.TrustProviderType">TrustProviderType</a>

The TrustProviderType.

---


## Structs <a name="Structs" id="Structs"></a>

### AccessEndpointProps <a name="AccessEndpointProps" id="aws-verifiedaccess-alpha.AccessEndpointProps"></a>

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.AccessEndpointProps.Initializer"></a>

```typescript
import { AccessEndpointProps } from 'aws-verifiedaccess-alpha'

const accessEndpointProps: AccessEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.accessGroup">accessGroup</a></code> | <code><a href="#aws-verifiedaccess-alpha.IAccessGroup">IAccessGroup</a></code> | the Access Group that this is assocaited with; |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | Zone to use for DNS record. |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.hostname">hostname</a></code> | <code>string</code> | hostname. |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC for the Access Group Endpoint is located. |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.attachmentType">attachmentType</a></code> | <code><a href="#aws-verifiedaccess-alpha.AttachementType">AttachementType</a></code> | AttachmentType. |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | use this certificate for the endpoint. |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.description">description</a></code> | <code>string</code> | A Description. |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.loadBalancerEndpoint">loadBalancerEndpoint</a></code> | <code><a href="#aws-verifiedaccess-alpha.LoadBalancerEndpoint">LoadBalancerEndpoint</a></code> | The loadbalancer details. |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.name">name</a></code> | <code>string</code> | Name, added as a Tag. |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.networkInterfaceEndpoint">networkInterfaceEndpoint</a></code> | <code><a href="#aws-verifiedaccess-alpha.NetworkInterfaceEndpoint">NetworkInterfaceEndpoint</a></code> | the networkInterface details. |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.policyenabled">policyenabled</a></code> | <code>boolean</code> | Verified Access Policy enabled. |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | Security Groups to attach to the endpoint. |
| <code><a href="#aws-verifiedaccess-alpha.AccessEndpointProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | tags to add to the endpoint. |

---

##### `accessGroup`<sup>Required</sup> <a name="accessGroup" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.accessGroup"></a>

```typescript
public readonly accessGroup: IAccessGroup;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.IAccessGroup">IAccessGroup</a>

the Access Group that this is assocaited with;

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

Zone to use for DNS record.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

hostname.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC for the Access Group Endpoint is located.

---

##### `attachmentType`<sup>Optional</sup> <a name="attachmentType" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.attachmentType"></a>

```typescript
public readonly attachmentType: AttachementType;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.AttachementType">AttachementType</a>
- *Default:* VPC

AttachmentType.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate
- *Default:* create a new certificate

use this certificate for the endpoint.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No descriptoon

A Description.

---

##### `loadBalancerEndpoint`<sup>Optional</sup> <a name="loadBalancerEndpoint" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.loadBalancerEndpoint"></a>

```typescript
public readonly loadBalancerEndpoint: LoadBalancerEndpoint;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.LoadBalancerEndpoint">LoadBalancerEndpoint</a>
- *Default:* none

The loadbalancer details.

---

##### `name`<sup>Optional</sup> <a name="name" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* no name

Name, added as a Tag.

---

##### `networkInterfaceEndpoint`<sup>Optional</sup> <a name="networkInterfaceEndpoint" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.networkInterfaceEndpoint"></a>

```typescript
public readonly networkInterfaceEndpoint: NetworkInterfaceEndpoint;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.NetworkInterfaceEndpoint">NetworkInterfaceEndpoint</a>
- *Default:* none

the networkInterface details.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `policyenabled`<sup>Optional</sup> <a name="policyenabled" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.policyenabled"></a>

```typescript
public readonly policyenabled: boolean;
```

- *Type:* boolean
- *Default:* true

Verified Access Policy enabled.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* creates a securitity group with open access

Security Groups to attach to the endpoint.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-verifiedaccess-alpha.AccessEndpointProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]
- *Default:* no tags

tags to add to the endpoint.

---

### AccessGroupProps <a name="AccessGroupProps" id="aws-verifiedaccess-alpha.AccessGroupProps"></a>

AcessGroupProps.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.AccessGroupProps.Initializer"></a>

```typescript
import { AccessGroupProps } from 'aws-verifiedaccess-alpha'

const accessGroupProps: AccessGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupProps.property.accessInstance">accessInstance</a></code> | <code><a href="#aws-verifiedaccess-alpha.IAccessInstance">IAccessInstance</a></code> | Access Instance. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupProps.property.description">description</a></code> | <code>string</code> | description. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupProps.property.policyDocument">policyDocument</a></code> | <code>string</code> | policy document. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupProps.property.enabled">enabled</a></code> | <code>boolean</code> | Enable the policy. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupProps.property.name">name</a></code> | <code>string</code> | name. |
| <code><a href="#aws-verifiedaccess-alpha.AccessGroupProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | Tags. |

---

##### `accessInstance`<sup>Required</sup> <a name="accessInstance" id="aws-verifiedaccess-alpha.AccessGroupProps.property.accessInstance"></a>

```typescript
public readonly accessInstance: IAccessInstance;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.IAccessInstance">IAccessInstance</a>

Access Instance.

---

##### `description`<sup>Required</sup> <a name="description" id="aws-verifiedaccess-alpha.AccessGroupProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

description.

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="aws-verifiedaccess-alpha.AccessGroupProps.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

policy document.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="aws-verifiedaccess-alpha.AccessGroupProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the policy.

---

##### `name`<sup>Optional</sup> <a name="name" id="aws-verifiedaccess-alpha.AccessGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* no name

name.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-verifiedaccess-alpha.AccessGroupProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]
- *Default:* No tags

Tags.

---

### AccessInstanceProps <a name="AccessInstanceProps" id="aws-verifiedaccess-alpha.AccessInstanceProps"></a>

Access Instance Properties.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.AccessInstanceProps.Initializer"></a>

```typescript
import { AccessInstanceProps } from 'aws-verifiedaccess-alpha'

const accessInstanceProps: AccessInstanceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstanceProps.property.description">description</a></code> | <code>string</code> | Description. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstanceProps.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#aws-verifiedaccess-alpha.VerifiedAccessLog">VerifiedAccessLog</a></code> | Logging. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstanceProps.property.name">name</a></code> | <code>string</code> | Name for the Access Instance. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstanceProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | Tags. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstanceProps.property.trustProviders">trustProviders</a></code> | <code><a href="#aws-verifiedaccess-alpha.ITrustProvider">ITrustProvider</a>[]</code> | TrustProviders. |
| <code><a href="#aws-verifiedaccess-alpha.AccessInstanceProps.property.wafAcl">wafAcl</a></code> | <code>aws-cdk-lib.aws_wafv2.CfnWebACL</code> | wafAcl attached to the Access Instance. |

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-verifiedaccess-alpha.AccessInstanceProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* none

Description.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="aws-verifiedaccess-alpha.AccessInstanceProps.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: VerifiedAccessLog;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.VerifiedAccessLog">VerifiedAccessLog</a>
- *Default:* None

Logging.

---

##### `name`<sup>Optional</sup> <a name="name" id="aws-verifiedaccess-alpha.AccessInstanceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* none

Name for the Access Instance.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-verifiedaccess-alpha.AccessInstanceProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]
- *Default:* None

Tags.

---

##### `trustProviders`<sup>Optional</sup> <a name="trustProviders" id="aws-verifiedaccess-alpha.AccessInstanceProps.property.trustProviders"></a>

```typescript
public readonly trustProviders: ITrustProvider[];
```

- *Type:* <a href="#aws-verifiedaccess-alpha.ITrustProvider">ITrustProvider</a>[]
- *Default:* None

TrustProviders.

---

##### `wafAcl`<sup>Optional</sup> <a name="wafAcl" id="aws-verifiedaccess-alpha.AccessInstanceProps.property.wafAcl"></a>

```typescript
public readonly wafAcl: CfnWebACL;
```

- *Type:* aws-cdk-lib.aws_wafv2.CfnWebACL
- *Default:* None

wafAcl attached to the Access Instance.

---

### AvaPolicyProps <a name="AvaPolicyProps" id="aws-verifiedaccess-alpha.AvaPolicyProps"></a>

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.AvaPolicyProps.Initializer"></a>

```typescript
import { AvaPolicyProps } from 'aws-verifiedaccess-alpha'

const avaPolicyProps: AvaPolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicyProps.property.allowIPranges">allowIPranges</a></code> | <code>string[]</code> | Restrict to specific Ip address ranges Consider using WAF. |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicyProps.property.blockIPranges">blockIPranges</a></code> | <code>string[]</code> | Block IP ranges Consider using WAF. |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicyProps.property.deviceTrusts">deviceTrusts</a></code> | <code><a href="#aws-verifiedaccess-alpha.DeviceTrusts">DeviceTrusts</a>[]</code> | DeviceTrusts:. |
| <code><a href="#aws-verifiedaccess-alpha.AvaPolicyProps.property.userTrusts">userTrusts</a></code> | <code><a href="#aws-verifiedaccess-alpha.UserTrusts">UserTrusts</a>[]</code> | User Trust Provider:. |

---

##### `allowIPranges`<sup>Optional</sup> <a name="allowIPranges" id="aws-verifiedaccess-alpha.AvaPolicyProps.property.allowIPranges"></a>

```typescript
public readonly allowIPranges: string[];
```

- *Type:* string[]

Restrict to specific Ip address ranges Consider using WAF.

---

##### `blockIPranges`<sup>Optional</sup> <a name="blockIPranges" id="aws-verifiedaccess-alpha.AvaPolicyProps.property.blockIPranges"></a>

```typescript
public readonly blockIPranges: string[];
```

- *Type:* string[]

Block IP ranges Consider using WAF.

---

##### `deviceTrusts`<sup>Optional</sup> <a name="deviceTrusts" id="aws-verifiedaccess-alpha.AvaPolicyProps.property.deviceTrusts"></a>

```typescript
public readonly deviceTrusts: DeviceTrusts[];
```

- *Type:* <a href="#aws-verifiedaccess-alpha.DeviceTrusts">DeviceTrusts</a>[]
- *Default:* none

DeviceTrusts:.

---

##### `userTrusts`<sup>Optional</sup> <a name="userTrusts" id="aws-verifiedaccess-alpha.AvaPolicyProps.property.userTrusts"></a>

```typescript
public readonly userTrusts: UserTrusts[];
```

- *Type:* <a href="#aws-verifiedaccess-alpha.UserTrusts">UserTrusts</a>[]

User Trust Provider:.

---

### CloudWatchLogProps <a name="CloudWatchLogProps" id="aws-verifiedaccess-alpha.CloudWatchLogProps"></a>

CloudWatch Log Props.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.CloudWatchLogProps.Initializer"></a>

```typescript
import { CloudWatchLogProps } from 'aws-verifiedaccess-alpha'

const cloudWatchLogProps: CloudWatchLogProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.CloudWatchLogProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | Log Group. |
| <code><a href="#aws-verifiedaccess-alpha.CloudWatchLogProps.property.includeTrustContext">includeTrustContext</a></code> | <code>boolean</code> | Include Trust Context in logs. |
| <code><a href="#aws-verifiedaccess-alpha.CloudWatchLogProps.property.logVersion">logVersion</a></code> | <code><a href="#aws-verifiedaccess-alpha.LogVersion">LogVersion</a></code> | Log Version. |

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="aws-verifiedaccess-alpha.CloudWatchLogProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

Log Group.

---

##### `includeTrustContext`<sup>Optional</sup> <a name="includeTrustContext" id="aws-verifiedaccess-alpha.CloudWatchLogProps.property.includeTrustContext"></a>

```typescript
public readonly includeTrustContext: boolean;
```

- *Type:* boolean
- *Default:* true

Include Trust Context in logs.

---

##### `logVersion`<sup>Optional</sup> <a name="logVersion" id="aws-verifiedaccess-alpha.CloudWatchLogProps.property.logVersion"></a>

```typescript
public readonly logVersion: LogVersion;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.LogVersion">LogVersion</a>
- *Default:* ocsf-0.1

Log Version.

---

### CloudWatchLogs <a name="CloudWatchLogs" id="aws-verifiedaccess-alpha.CloudWatchLogs"></a>

CloudWatch Log Properties.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.CloudWatchLogs.Initializer"></a>

```typescript
import { CloudWatchLogs } from 'aws-verifiedaccess-alpha'

const cloudWatchLogs: CloudWatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.CloudWatchLogs.property.enabled">enabled</a></code> | <code>boolean</code> | enable logging. |
| <code><a href="#aws-verifiedaccess-alpha.CloudWatchLogs.property.logGroup">logGroup</a></code> | <code>string</code> | LogGroup. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="aws-verifiedaccess-alpha.CloudWatchLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

enable logging.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="aws-verifiedaccess-alpha.CloudWatchLogs.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

LogGroup.

---

### DeviceOptions <a name="DeviceOptions" id="aws-verifiedaccess-alpha.DeviceOptions"></a>

DeviceOptions.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.DeviceOptions.Initializer"></a>

```typescript
import { DeviceOptions } from 'aws-verifiedaccess-alpha'

const deviceOptions: DeviceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.DeviceOptions.property.tenantId">tenantId</a></code> | <code>string</code> | tennantId. |

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="aws-verifiedaccess-alpha.DeviceOptions.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

tennantId.

---

### DeviceTrustProviderProps <a name="DeviceTrustProviderProps" id="aws-verifiedaccess-alpha.DeviceTrustProviderProps"></a>

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.DeviceTrustProviderProps.Initializer"></a>

```typescript
import { DeviceTrustProviderProps } from 'aws-verifiedaccess-alpha'

const deviceTrustProviderProps: DeviceTrustProviderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.DeviceTrustProviderProps.property.tenantId">tenantId</a></code> | <code>string</code> | tenantId. |
| <code><a href="#aws-verifiedaccess-alpha.DeviceTrustProviderProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.DeviceTrustProviderProps.property.policyReferenceName">policyReferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.DeviceTrustProviderProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | *No description.* |

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="aws-verifiedaccess-alpha.DeviceTrustProviderProps.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

tenantId.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-verifiedaccess-alpha.DeviceTrustProviderProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

---

##### `policyReferenceName`<sup>Optional</sup> <a name="policyReferenceName" id="aws-verifiedaccess-alpha.DeviceTrustProviderProps.property.policyReferenceName"></a>

```typescript
public readonly policyReferenceName: string;
```

- *Type:* string
- *Default:* Will default to jamf or crwd

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-verifiedaccess-alpha.DeviceTrustProviderProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]
- *Default:* No tags

---

### DeviceTrusts <a name="DeviceTrusts" id="aws-verifiedaccess-alpha.DeviceTrusts"></a>

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.DeviceTrusts.Initializer"></a>

```typescript
import { DeviceTrusts } from 'aws-verifiedaccess-alpha'

const deviceTrusts: DeviceTrusts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.DeviceTrusts.property.deviceTrustProvider">deviceTrustProvider</a></code> | <code><a href="#aws-verifiedaccess-alpha.ITrustProvider">ITrustProvider</a></code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.DeviceTrusts.property.acceptedRisks">acceptedRisks</a></code> | <code><a href="#aws-verifiedaccess-alpha.JamfRisk">JamfRisk</a>[]</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.DeviceTrusts.property.minscore">minscore</a></code> | <code>number</code> | *No description.* |

---

##### `deviceTrustProvider`<sup>Required</sup> <a name="deviceTrustProvider" id="aws-verifiedaccess-alpha.DeviceTrusts.property.deviceTrustProvider"></a>

```typescript
public readonly deviceTrustProvider: ITrustProvider;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.ITrustProvider">ITrustProvider</a>

---

##### `acceptedRisks`<sup>Optional</sup> <a name="acceptedRisks" id="aws-verifiedaccess-alpha.DeviceTrusts.property.acceptedRisks"></a>

```typescript
public readonly acceptedRisks: JamfRisk[];
```

- *Type:* <a href="#aws-verifiedaccess-alpha.JamfRisk">JamfRisk</a>[]

---

##### `minscore`<sup>Optional</sup> <a name="minscore" id="aws-verifiedaccess-alpha.DeviceTrusts.property.minscore"></a>

```typescript
public readonly minscore: number;
```

- *Type:* number

---

### GroupProps <a name="GroupProps" id="aws-verifiedaccess-alpha.iamIdentityCenter.GroupProps"></a>

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.iamIdentityCenter.GroupProps.Initializer"></a>

```typescript
import { iamIdentityCenter } from 'aws-verifiedaccess-alpha'

const groupProps: iamIdentityCenter.GroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.GroupProps.property.name">name</a></code> | <code>string</code> | A string containing the name of the group. |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.GroupProps.property.description">description</a></code> | <code>string</code> | the description of the group. |

---

##### `name`<sup>Required</sup> <a name="name" id="aws-verifiedaccess-alpha.iamIdentityCenter.GroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A string containing the name of the group.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-verifiedaccess-alpha.iamIdentityCenter.GroupProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* : no description

the description of the group.

---

### IamIdentityTrustProps <a name="IamIdentityTrustProps" id="aws-verifiedaccess-alpha.IamIdentityTrustProps"></a>

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.IamIdentityTrustProps.Initializer"></a>

```typescript
import { IamIdentityTrustProps } from 'aws-verifiedaccess-alpha'

const iamIdentityTrustProps: IamIdentityTrustProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.IamIdentityTrustProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.IamIdentityTrustProps.property.policyReferenceName">policyReferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.IamIdentityTrustProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | *No description.* |

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-verifiedaccess-alpha.IamIdentityTrustProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

---

##### `policyReferenceName`<sup>Optional</sup> <a name="policyReferenceName" id="aws-verifiedaccess-alpha.IamIdentityTrustProps.property.policyReferenceName"></a>

```typescript
public readonly policyReferenceName: string;
```

- *Type:* string
- *Default:* iamIdentity

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-verifiedaccess-alpha.IamIdentityTrustProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]
- *Default:* No tags

---

### ImportedAccessGroupProps <a name="ImportedAccessGroupProps" id="aws-verifiedaccess-alpha.ImportedAccessGroupProps"></a>

Props to import an Acess Group.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.ImportedAccessGroupProps.Initializer"></a>

```typescript
import { ImportedAccessGroupProps } from 'aws-verifiedaccess-alpha'

const importedAccessGroupProps: ImportedAccessGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.ImportedAccessGroupProps.property.accessGroupId">accessGroupId</a></code> | <code>string</code> | acessGroupId. |
| <code><a href="#aws-verifiedaccess-alpha.ImportedAccessGroupProps.property.description">description</a></code> | <code>string</code> | description. |

---

##### `accessGroupId`<sup>Optional</sup> <a name="accessGroupId" id="aws-verifiedaccess-alpha.ImportedAccessGroupProps.property.accessGroupId"></a>

```typescript
public readonly accessGroupId: string;
```

- *Type:* string

acessGroupId.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-verifiedaccess-alpha.ImportedAccessGroupProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

description.

---

### KinesisDataFirehose <a name="KinesisDataFirehose" id="aws-verifiedaccess-alpha.KinesisDataFirehose"></a>

Kinesis Firehose Log Properties.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.KinesisDataFirehose.Initializer"></a>

```typescript
import { KinesisDataFirehose } from 'aws-verifiedaccess-alpha'

const kinesisDataFirehose: KinesisDataFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.KinesisDataFirehose.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | Delivery Stream. |
| <code><a href="#aws-verifiedaccess-alpha.KinesisDataFirehose.property.enabled">enabled</a></code> | <code>boolean</code> | Enabled. |

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="aws-verifiedaccess-alpha.KinesisDataFirehose.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

Delivery Stream.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="aws-verifiedaccess-alpha.KinesisDataFirehose.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Enabled.

---

### KinesisLogProps <a name="KinesisLogProps" id="aws-verifiedaccess-alpha.KinesisLogProps"></a>

Kinesis Log Props.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.KinesisLogProps.Initializer"></a>

```typescript
import { KinesisLogProps } from 'aws-verifiedaccess-alpha'

const kinesisLogProps: KinesisLogProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.KinesisLogProps.property.stream">stream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | stream. |
| <code><a href="#aws-verifiedaccess-alpha.KinesisLogProps.property.includeTrustContext">includeTrustContext</a></code> | <code>boolean</code> | Include Trust Context in logs. |
| <code><a href="#aws-verifiedaccess-alpha.KinesisLogProps.property.logVersion">logVersion</a></code> | <code><a href="#aws-verifiedaccess-alpha.LogVersion">LogVersion</a></code> | log version. |

---

##### `stream`<sup>Required</sup> <a name="stream" id="aws-verifiedaccess-alpha.KinesisLogProps.property.stream"></a>

```typescript
public readonly stream: IStream;
```

- *Type:* aws-cdk-lib.aws_kinesis.IStream

stream.

---

##### `includeTrustContext`<sup>Optional</sup> <a name="includeTrustContext" id="aws-verifiedaccess-alpha.KinesisLogProps.property.includeTrustContext"></a>

```typescript
public readonly includeTrustContext: boolean;
```

- *Type:* boolean
- *Default:* true

Include Trust Context in logs.

---

##### `logVersion`<sup>Optional</sup> <a name="logVersion" id="aws-verifiedaccess-alpha.KinesisLogProps.property.logVersion"></a>

```typescript
public readonly logVersion: LogVersion;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.LogVersion">LogVersion</a>
- *Default:* ocsf-0.1

log version.

---

### LoadBalancerEndpoint <a name="LoadBalancerEndpoint" id="aws-verifiedaccess-alpha.LoadBalancerEndpoint"></a>

Properties for a Load Balancer ENdpoint.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.LoadBalancerEndpoint.Initializer"></a>

```typescript
import { LoadBalancerEndpoint } from 'aws-verifiedaccess-alpha'

const loadBalancerEndpoint: LoadBalancerEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.LoadBalancerEndpoint.property.loadbalancer">loadbalancer</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer</code> | The loadbalancer that is being targeted. |
| <code><a href="#aws-verifiedaccess-alpha.LoadBalancerEndpoint.property.port">port</a></code> | <code>number</code> | Which port to request on. |
| <code><a href="#aws-verifiedaccess-alpha.LoadBalancerEndpoint.property.protocol">protocol</a></code> | <code><a href="#aws-verifiedaccess-alpha.Protocol">Protocol</a></code> | HTTP or HTTPS. |
| <code><a href="#aws-verifiedaccess-alpha.LoadBalancerEndpoint.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Which Subnets are the loadbalancer in. |

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="aws-verifiedaccess-alpha.LoadBalancerEndpoint.property.loadbalancer"></a>

```typescript
public readonly loadbalancer: IApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer

The loadbalancer that is being targeted.

---

##### `port`<sup>Required</sup> <a name="port" id="aws-verifiedaccess-alpha.LoadBalancerEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Which port to request on.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="aws-verifiedaccess-alpha.LoadBalancerEndpoint.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.Protocol">Protocol</a>

HTTP or HTTPS.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="aws-verifiedaccess-alpha.LoadBalancerEndpoint.property.subnets"></a>

```typescript
public readonly subnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Which Subnets are the loadbalancer in.

---

### NetworkInterfaceEndpoint <a name="NetworkInterfaceEndpoint" id="aws-verifiedaccess-alpha.NetworkInterfaceEndpoint"></a>

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.NetworkInterfaceEndpoint.Initializer"></a>

```typescript
import { NetworkInterfaceEndpoint } from 'aws-verifiedaccess-alpha'

const networkInterfaceEndpoint: NetworkInterfaceEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.NetworkInterfaceEndpoint.property.networkInterface">networkInterface</a></code> | <code>aws-cdk-lib.aws_ec2.CfnNetworkInterface</code> | The network interface that is being targeted. |
| <code><a href="#aws-verifiedaccess-alpha.NetworkInterfaceEndpoint.property.port">port</a></code> | <code>number</code> | Which port to request on. |
| <code><a href="#aws-verifiedaccess-alpha.NetworkInterfaceEndpoint.property.protocol">protocol</a></code> | <code><a href="#aws-verifiedaccess-alpha.Protocol">Protocol</a></code> | HTTP or HTTPS. |

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="aws-verifiedaccess-alpha.NetworkInterfaceEndpoint.property.networkInterface"></a>

```typescript
public readonly networkInterface: CfnNetworkInterface;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnNetworkInterface

The network interface that is being targeted.

---

##### `port`<sup>Required</sup> <a name="port" id="aws-verifiedaccess-alpha.NetworkInterfaceEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Which port to request on.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="aws-verifiedaccess-alpha.NetworkInterfaceEndpoint.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.Protocol">Protocol</a>

HTTP or HTTPS.

---

### OIDCOptions <a name="OIDCOptions" id="aws-verifiedaccess-alpha.OIDCOptions"></a>

OIDC Options.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.OIDCOptions.Initializer"></a>

```typescript
import { OIDCOptions } from 'aws-verifiedaccess-alpha'

const oIDCOptions: OIDCOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.OIDCOptions.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | auth endpoint. |
| <code><a href="#aws-verifiedaccess-alpha.OIDCOptions.property.clientSecret">clientSecret</a></code> | <code>string</code> | clientSecrect. |
| <code><a href="#aws-verifiedaccess-alpha.OIDCOptions.property.issuer">issuer</a></code> | <code>string</code> | issuer. |
| <code><a href="#aws-verifiedaccess-alpha.OIDCOptions.property.scope">scope</a></code> | <code>string</code> | scope. |
| <code><a href="#aws-verifiedaccess-alpha.OIDCOptions.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | token endpoint. |
| <code><a href="#aws-verifiedaccess-alpha.OIDCOptions.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | tuser InfoEnpoint. |

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="aws-verifiedaccess-alpha.OIDCOptions.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string
- *Default:* : none

auth endpoint.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="aws-verifiedaccess-alpha.OIDCOptions.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string
- *Default:* : none

clientSecrect.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="aws-verifiedaccess-alpha.OIDCOptions.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string
- *Default:* none

issuer.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="aws-verifiedaccess-alpha.OIDCOptions.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string
- *Default:* none

scope.

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="aws-verifiedaccess-alpha.OIDCOptions.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string
- *Default:* : none

token endpoint.

---

##### `userInfoEndpoint`<sup>Optional</sup> <a name="userInfoEndpoint" id="aws-verifiedaccess-alpha.OIDCOptions.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string
- *Default:* : none

tuser InfoEnpoint.

---

### OidcTrustProps <a name="OidcTrustProps" id="aws-verifiedaccess-alpha.OidcTrustProps"></a>

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.OidcTrustProps.Initializer"></a>

```typescript
import { OidcTrustProps } from 'aws-verifiedaccess-alpha'

const oidcTrustProps: OidcTrustProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.OidcTrustProps.property.oidcOptions">oidcOptions</a></code> | <code><a href="#aws-verifiedaccess-alpha.OIDCOptions">OIDCOptions</a></code> | oidc options. |
| <code><a href="#aws-verifiedaccess-alpha.OidcTrustProps.property.policyReferenceName">policyReferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.OidcTrustProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.OidcTrustProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | *No description.* |

---

##### `oidcOptions`<sup>Required</sup> <a name="oidcOptions" id="aws-verifiedaccess-alpha.OidcTrustProps.property.oidcOptions"></a>

```typescript
public readonly oidcOptions: OIDCOptions;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.OIDCOptions">OIDCOptions</a>

oidc options.

---

##### `policyReferenceName`<sup>Required</sup> <a name="policyReferenceName" id="aws-verifiedaccess-alpha.OidcTrustProps.property.policyReferenceName"></a>

```typescript
public readonly policyReferenceName: string;
```

- *Type:* string
- *Default:* policyReferenceName. not defaulting as it is not possible to know what this might be pointing at

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-verifiedaccess-alpha.OidcTrustProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-verifiedaccess-alpha.OidcTrustProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]
- *Default:* No tags

---

### S3LogProps <a name="S3LogProps" id="aws-verifiedaccess-alpha.S3LogProps"></a>

S3 Log Props.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.S3LogProps.Initializer"></a>

```typescript
import { S3LogProps } from 'aws-verifiedaccess-alpha'

const s3LogProps: S3LogProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.S3LogProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | bucket. |
| <code><a href="#aws-verifiedaccess-alpha.S3LogProps.property.includeTrustContext">includeTrustContext</a></code> | <code>boolean</code> | include Trust Context in logs? |
| <code><a href="#aws-verifiedaccess-alpha.S3LogProps.property.logVersion">logVersion</a></code> | <code><a href="#aws-verifiedaccess-alpha.LogVersion">LogVersion</a></code> | Log Version. |
| <code><a href="#aws-verifiedaccess-alpha.S3LogProps.property.prefix">prefix</a></code> | <code>string</code> | Prefix for bucket. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="aws-verifiedaccess-alpha.S3LogProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

bucket.

---

##### `includeTrustContext`<sup>Optional</sup> <a name="includeTrustContext" id="aws-verifiedaccess-alpha.S3LogProps.property.includeTrustContext"></a>

```typescript
public readonly includeTrustContext: boolean;
```

- *Type:* boolean
- *Default:* true

include Trust Context in logs?

---

##### `logVersion`<sup>Optional</sup> <a name="logVersion" id="aws-verifiedaccess-alpha.S3LogProps.property.logVersion"></a>

```typescript
public readonly logVersion: LogVersion;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.LogVersion">LogVersion</a>
- *Default:* ocsf-0.1

Log Version.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="aws-verifiedaccess-alpha.S3LogProps.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string
- *Default:* root of bucket

Prefix for bucket.

---

### S3Logs <a name="S3Logs" id="aws-verifiedaccess-alpha.S3Logs"></a>

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.S3Logs.Initializer"></a>

```typescript
import { S3Logs } from 'aws-verifiedaccess-alpha'

const s3Logs: S3Logs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.S3Logs.property.bucketName">bucketName</a></code> | <code>string</code> | Bucket Name. |
| <code><a href="#aws-verifiedaccess-alpha.S3Logs.property.enabled">enabled</a></code> | <code>boolean</code> | Enable Logging. |
| <code><a href="#aws-verifiedaccess-alpha.S3Logs.property.prefix">prefix</a></code> | <code>string</code> | Prefix. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="aws-verifiedaccess-alpha.S3Logs.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Bucket Name.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="aws-verifiedaccess-alpha.S3Logs.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Enable Logging.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="aws-verifiedaccess-alpha.S3Logs.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Prefix.

---

### TrustProviderProps <a name="TrustProviderProps" id="aws-verifiedaccess-alpha.TrustProviderProps"></a>

TrustProvider Props.

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.TrustProviderProps.Initializer"></a>

```typescript
import { TrustProviderProps } from 'aws-verifiedaccess-alpha'

const trustProviderProps: TrustProviderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.TrustProviderProps.property.policyReferenceName">policyReferenceName</a></code> | <code>string</code> | Reference Name. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProviderProps.property.description">description</a></code> | <code>string</code> | Description. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProviderProps.property.deviceOptions">deviceOptions</a></code> | <code><a href="#aws-verifiedaccess-alpha.DeviceOptions">DeviceOptions</a></code> | deviceOptons. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProviderProps.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code><a href="#aws-verifiedaccess-alpha.DeviceTrustProviderType">DeviceTrustProviderType</a></code> | trust Privider. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProviderProps.property.oidcOptions">oidcOptions</a></code> | <code><a href="#aws-verifiedaccess-alpha.OIDCOptions">OIDCOptions</a></code> | oidc Options. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProviderProps.property.tags">tags</a></code> | <code>aws-cdk-lib.Tag[]</code> | tags. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProviderProps.property.userTrustProviderType">userTrustProviderType</a></code> | <code><a href="#aws-verifiedaccess-alpha.UserTrustProviderType">UserTrustProviderType</a></code> | User Trust Provider Type. |

---

##### `policyReferenceName`<sup>Required</sup> <a name="policyReferenceName" id="aws-verifiedaccess-alpha.TrustProviderProps.property.policyReferenceName"></a>

```typescript
public readonly policyReferenceName: string;
```

- *Type:* string

Reference Name.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-verifiedaccess-alpha.TrustProviderProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* None

Description.

---

##### `deviceOptions`<sup>Optional</sup> <a name="deviceOptions" id="aws-verifiedaccess-alpha.TrustProviderProps.property.deviceOptions"></a>

```typescript
public readonly deviceOptions: DeviceOptions;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.DeviceOptions">DeviceOptions</a>
- *Default:* none

deviceOptons.

---

##### `deviceTrustProviderType`<sup>Optional</sup> <a name="deviceTrustProviderType" id="aws-verifiedaccess-alpha.TrustProviderProps.property.deviceTrustProviderType"></a>

```typescript
public readonly deviceTrustProviderType: DeviceTrustProviderType;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.DeviceTrustProviderType">DeviceTrustProviderType</a>
- *Default:* none

trust Privider.

---

##### `oidcOptions`<sup>Optional</sup> <a name="oidcOptions" id="aws-verifiedaccess-alpha.TrustProviderProps.property.oidcOptions"></a>

```typescript
public readonly oidcOptions: OIDCOptions;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.OIDCOptions">OIDCOptions</a>
- *Default:* none

oidc Options.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-verifiedaccess-alpha.TrustProviderProps.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* aws-cdk-lib.Tag[]
- *Default:* none

tags.

---

##### `userTrustProviderType`<sup>Optional</sup> <a name="userTrustProviderType" id="aws-verifiedaccess-alpha.TrustProviderProps.property.userTrustProviderType"></a>

```typescript
public readonly userTrustProviderType: UserTrustProviderType;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.UserTrustProviderType">UserTrustProviderType</a>
- *Default:* None

User Trust Provider Type.

---

### UserTrusts <a name="UserTrusts" id="aws-verifiedaccess-alpha.UserTrusts"></a>

#### Initializer <a name="Initializer" id="aws-verifiedaccess-alpha.UserTrusts.Initializer"></a>

```typescript
import { UserTrusts } from 'aws-verifiedaccess-alpha'

const userTrusts: UserTrusts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.UserTrusts.property.userTrustProvider">userTrustProvider</a></code> | <code><a href="#aws-verifiedaccess-alpha.ITrustProvider">ITrustProvider</a></code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.UserTrusts.property.conditions">conditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.UserTrusts.property.identityGroups">identityGroups</a></code> | <code>aws-verifiedaccess-alpha.iamIdentityCenter.IGroup[]</code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.UserTrusts.property.verifiedEmail">verifiedEmail</a></code> | <code><a href="#aws-verifiedaccess-alpha.VerifiedEmail">VerifiedEmail</a></code> | *No description.* |

---

##### `userTrustProvider`<sup>Required</sup> <a name="userTrustProvider" id="aws-verifiedaccess-alpha.UserTrusts.property.userTrustProvider"></a>

```typescript
public readonly userTrustProvider: ITrustProvider;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.ITrustProvider">ITrustProvider</a>

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="aws-verifiedaccess-alpha.UserTrusts.property.conditions"></a>

```typescript
public readonly conditions: string[];
```

- *Type:* string[]

---

##### `identityGroups`<sup>Optional</sup> <a name="identityGroups" id="aws-verifiedaccess-alpha.UserTrusts.property.identityGroups"></a>

```typescript
public readonly identityGroups: IGroup[];
```

- *Type:* aws-verifiedaccess-alpha.iamIdentityCenter.IGroup[]

---

##### `verifiedEmail`<sup>Optional</sup> <a name="verifiedEmail" id="aws-verifiedaccess-alpha.UserTrusts.property.verifiedEmail"></a>

```typescript
public readonly verifiedEmail: VerifiedEmail;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.VerifiedEmail">VerifiedEmail</a>

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedAccessLog <a name="VerifiedAccessLog" id="aws-verifiedaccess-alpha.VerifiedAccessLog"></a>

Create a Verified Access Log.

#### Initializers <a name="Initializers" id="aws-verifiedaccess-alpha.VerifiedAccessLog.Initializer"></a>

```typescript
import { VerifiedAccessLog } from 'aws-verifiedaccess-alpha'

new VerifiedAccessLog()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.VerifiedAccessLog.cloudwatch">cloudwatch</a></code> | Send to CLoudwatch. |
| <code><a href="#aws-verifiedaccess-alpha.VerifiedAccessLog.kinesis">kinesis</a></code> | Stream to Kinesis. |
| <code><a href="#aws-verifiedaccess-alpha.VerifiedAccessLog.s3">s3</a></code> | Construct a logging destination for a S3 Bucket. |

---

##### `cloudwatch` <a name="cloudwatch" id="aws-verifiedaccess-alpha.VerifiedAccessLog.cloudwatch"></a>

```typescript
import { VerifiedAccessLog } from 'aws-verifiedaccess-alpha'

VerifiedAccessLog.cloudwatch(props: CloudWatchLogProps)
```

Send to CLoudwatch.

###### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.VerifiedAccessLog.cloudwatch.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.CloudWatchLogProps">CloudWatchLogProps</a>

---

##### `kinesis` <a name="kinesis" id="aws-verifiedaccess-alpha.VerifiedAccessLog.kinesis"></a>

```typescript
import { VerifiedAccessLog } from 'aws-verifiedaccess-alpha'

VerifiedAccessLog.kinesis(props: KinesisLogProps)
```

Stream to Kinesis.

###### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.VerifiedAccessLog.kinesis.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.KinesisLogProps">KinesisLogProps</a>

---

##### `s3` <a name="s3" id="aws-verifiedaccess-alpha.VerifiedAccessLog.s3"></a>

```typescript
import { VerifiedAccessLog } from 'aws-verifiedaccess-alpha'

VerifiedAccessLog.s3(props: S3LogProps)
```

Construct a logging destination for a S3 Bucket.

###### `props`<sup>Required</sup> <a name="props" id="aws-verifiedaccess-alpha.VerifiedAccessLog.s3.parameter.props"></a>

- *Type:* <a href="#aws-verifiedaccess-alpha.S3LogProps">S3LogProps</a>

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IAccessEndpoint <a name="IAccessEndpoint" id="aws-verifiedaccess-alpha.IAccessEndpoint"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-verifiedaccess-alpha.AccessGroupEndpoint">AccessGroupEndpoint</a>, <a href="#aws-verifiedaccess-alpha.IAccessEndpoint">IAccessEndpoint</a>

Access Endpoint.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.IAccessEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-verifiedaccess-alpha.IAccessEndpoint.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-verifiedaccess-alpha.IAccessEndpoint.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-verifiedaccess-alpha.IAccessEndpoint.property.id">id</a></code> | <code>string</code> | The id of the endpoint. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-verifiedaccess-alpha.IAccessEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-verifiedaccess-alpha.IAccessEndpoint.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-verifiedaccess-alpha.IAccessEndpoint.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.IAccessEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The id of the endpoint.

---

### IAccessGroup <a name="IAccessGroup" id="aws-verifiedaccess-alpha.IAccessGroup"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-verifiedaccess-alpha.AccessGroup">AccessGroup</a>, <a href="#aws-verifiedaccess-alpha.IAccessGroup">IAccessGroup</a>

Access Group.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.IAccessGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-verifiedaccess-alpha.IAccessGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-verifiedaccess-alpha.IAccessGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-verifiedaccess-alpha.IAccessGroup.property.id">id</a></code> | <code>string</code> | Id of the Access Group. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-verifiedaccess-alpha.IAccessGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-verifiedaccess-alpha.IAccessGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-verifiedaccess-alpha.IAccessGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.IAccessGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Id of the Access Group.

---

### IAccessInstance <a name="IAccessInstance" id="aws-verifiedaccess-alpha.IAccessInstance"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-verifiedaccess-alpha.AccessInstance">AccessInstance</a>, <a href="#aws-verifiedaccess-alpha.IAccessInstance">IAccessInstance</a>

Access Instance Inteface.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.IAccessInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-verifiedaccess-alpha.IAccessInstance.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-verifiedaccess-alpha.IAccessInstance.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-verifiedaccess-alpha.IAccessInstance.property.id">id</a></code> | <code>string</code> | acessId. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-verifiedaccess-alpha.IAccessInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-verifiedaccess-alpha.IAccessInstance.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-verifiedaccess-alpha.IAccessInstance.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.IAccessInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

acessId.

---

### IAvaPolicy <a name="IAvaPolicy" id="aws-verifiedaccess-alpha.IAvaPolicy"></a>

- *Implemented By:* <a href="#aws-verifiedaccess-alpha.AvaPolicy">AvaPolicy</a>, <a href="#aws-verifiedaccess-alpha.IAvaPolicy">IAvaPolicy</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.IAvaPolicy.property.policy">policy</a></code> | <code>string</code> | Name of the Group. |

---

##### `policy`<sup>Required</sup> <a name="policy" id="aws-verifiedaccess-alpha.IAvaPolicy.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Name of the Group.

---

### IGroup <a name="IGroup" id="aws-verifiedaccess-alpha.iamIdentityCenter.IGroup"></a>

- *Implemented By:* aws-verifiedaccess-alpha.iamIdentityCenter.Group, aws-verifiedaccess-alpha.iamIdentityCenter.IGroup


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.IGroup.property.id">id</a></code> | <code>string</code> | Id of the Group. |
| <code><a href="#aws-verifiedaccess-alpha.iamIdentityCenter.IGroup.property.name">name</a></code> | <code>string</code> | Name of the Group. |

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.iamIdentityCenter.IGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Id of the Group.

---

##### `name`<sup>Required</sup> <a name="name" id="aws-verifiedaccess-alpha.iamIdentityCenter.IGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Group.

---

### ITrustProvider <a name="ITrustProvider" id="aws-verifiedaccess-alpha.ITrustProvider"></a>

- *Implemented By:* <a href="#aws-verifiedaccess-alpha.TrustProvider">TrustProvider</a>, <a href="#aws-verifiedaccess-alpha.ITrustProvider">ITrustProvider</a>

Create a vpc lattice service network.

Implemented by `ServiceNetwork`.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.ITrustProvider.property.id">id</a></code> | <code>string</code> | The Id of the Trust Provider. |
| <code><a href="#aws-verifiedaccess-alpha.ITrustProvider.property.policyReferenceName">policyReferenceName</a></code> | <code>string</code> | PolicyreferenceName. |
| <code><a href="#aws-verifiedaccess-alpha.ITrustProvider.property.type">type</a></code> | <code><a href="#aws-verifiedaccess-alpha.TrustProviderType">TrustProviderType</a></code> | The type of the Trust Provider. |
| <code><a href="#aws-verifiedaccess-alpha.ITrustProvider.property.userTrustType">userTrustType</a></code> | <code><a href="#aws-verifiedaccess-alpha.UserTrustProviderType">UserTrustProviderType</a></code> | User Trust Type. |

---

##### `id`<sup>Required</sup> <a name="id" id="aws-verifiedaccess-alpha.ITrustProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id of the Trust Provider.

---

##### `policyReferenceName`<sup>Required</sup> <a name="policyReferenceName" id="aws-verifiedaccess-alpha.ITrustProvider.property.policyReferenceName"></a>

```typescript
public readonly policyReferenceName: string;
```

- *Type:* string

PolicyreferenceName.

---

##### `type`<sup>Required</sup> <a name="type" id="aws-verifiedaccess-alpha.ITrustProvider.property.type"></a>

```typescript
public readonly type: TrustProviderType;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.TrustProviderType">TrustProviderType</a>

The type of the Trust Provider.

---

##### `userTrustType`<sup>Optional</sup> <a name="userTrustType" id="aws-verifiedaccess-alpha.ITrustProvider.property.userTrustType"></a>

```typescript
public readonly userTrustType: UserTrustProviderType;
```

- *Type:* <a href="#aws-verifiedaccess-alpha.UserTrustProviderType">UserTrustProviderType</a>

User Trust Type.

---

## Enums <a name="Enums" id="Enums"></a>

### AttachementType <a name="AttachementType" id="aws-verifiedaccess-alpha.AttachementType"></a>

Attachment Type.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.AttachementType.VPC">VPC</a></code> | Attach to a VPC. |

---

##### `VPC` <a name="VPC" id="aws-verifiedaccess-alpha.AttachementType.VPC"></a>

Attach to a VPC.

---


### DeviceTrustProviderType <a name="DeviceTrustProviderType" id="aws-verifiedaccess-alpha.DeviceTrustProviderType"></a>

device Trust Provider Type.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.DeviceTrustProviderType.JAMF">JAMF</a></code> | JamF for Mac. |
| <code><a href="#aws-verifiedaccess-alpha.DeviceTrustProviderType.CROWDSTRIKE">CROWDSTRIKE</a></code> | Crowdstrike for Others. |

---

##### `JAMF` <a name="JAMF" id="aws-verifiedaccess-alpha.DeviceTrustProviderType.JAMF"></a>

JamF for Mac.

---


##### `CROWDSTRIKE` <a name="CROWDSTRIKE" id="aws-verifiedaccess-alpha.DeviceTrustProviderType.CROWDSTRIKE"></a>

Crowdstrike for Others.

---


### JamfRisk <a name="JamfRisk" id="aws-verifiedaccess-alpha.JamfRisk"></a>

JamF Risks.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.JamfRisk.HIGH">HIGH</a></code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.JamfRisk.MEDIUM">MEDIUM</a></code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.JamfRisk.LOW">LOW</a></code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.JamfRisk.SECURE">SECURE</a></code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.JamfRisk.NOT_APPLICABLE">NOT_APPLICABLE</a></code> | *No description.* |

---

##### `HIGH` <a name="HIGH" id="aws-verifiedaccess-alpha.JamfRisk.HIGH"></a>

---


##### `MEDIUM` <a name="MEDIUM" id="aws-verifiedaccess-alpha.JamfRisk.MEDIUM"></a>

---


##### `LOW` <a name="LOW" id="aws-verifiedaccess-alpha.JamfRisk.LOW"></a>

---


##### `SECURE` <a name="SECURE" id="aws-verifiedaccess-alpha.JamfRisk.SECURE"></a>

---


##### `NOT_APPLICABLE` <a name="NOT_APPLICABLE" id="aws-verifiedaccess-alpha.JamfRisk.NOT_APPLICABLE"></a>

---


### LogVersion <a name="LogVersion" id="aws-verifiedaccess-alpha.LogVersion"></a>

Log Versions.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.LogVersion.OCSF_0_1">OCSF_0_1</a></code> | OCF1 0.1. |
| <code><a href="#aws-verifiedaccess-alpha.LogVersion.OCSF_1_0_0_RC2">OCSF_1_0_0_RC2</a></code> | RC2. |

---

##### `OCSF_0_1` <a name="OCSF_0_1" id="aws-verifiedaccess-alpha.LogVersion.OCSF_0_1"></a>

OCF1 0.1.

---


##### `OCSF_1_0_0_RC2` <a name="OCSF_1_0_0_RC2" id="aws-verifiedaccess-alpha.LogVersion.OCSF_1_0_0_RC2"></a>

RC2.

---


### Protocol <a name="Protocol" id="aws-verifiedaccess-alpha.Protocol"></a>

Protocol.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.Protocol.HTTP">HTTP</a></code> | HTTP. |
| <code><a href="#aws-verifiedaccess-alpha.Protocol.HTTPS">HTTPS</a></code> | HTTPS. |

---

##### `HTTP` <a name="HTTP" id="aws-verifiedaccess-alpha.Protocol.HTTP"></a>

HTTP.

---


##### `HTTPS` <a name="HTTPS" id="aws-verifiedaccess-alpha.Protocol.HTTPS"></a>

HTTPS.

---


### TrustProviderType <a name="TrustProviderType" id="aws-verifiedaccess-alpha.TrustProviderType"></a>

Trust provider Type.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.TrustProviderType.USER">USER</a></code> | USER. |
| <code><a href="#aws-verifiedaccess-alpha.TrustProviderType.DEVICE">DEVICE</a></code> | DEvice. |

---

##### `USER` <a name="USER" id="aws-verifiedaccess-alpha.TrustProviderType.USER"></a>

USER.

---


##### `DEVICE` <a name="DEVICE" id="aws-verifiedaccess-alpha.TrustProviderType.DEVICE"></a>

DEvice.

---


### UserTrustProviderType <a name="UserTrustProviderType" id="aws-verifiedaccess-alpha.UserTrustProviderType"></a>

User Trust Provider Types.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.UserTrustProviderType.IAM_IDENTITY_CENTER">IAM_IDENTITY_CENTER</a></code> | IAM identity. |
| <code><a href="#aws-verifiedaccess-alpha.UserTrustProviderType.OIDC">OIDC</a></code> | OIDC. |

---

##### `IAM_IDENTITY_CENTER` <a name="IAM_IDENTITY_CENTER" id="aws-verifiedaccess-alpha.UserTrustProviderType.IAM_IDENTITY_CENTER"></a>

IAM identity.

---


##### `OIDC` <a name="OIDC" id="aws-verifiedaccess-alpha.UserTrustProviderType.OIDC"></a>

OIDC.

---


### VerifiedEmail <a name="VerifiedEmail" id="aws-verifiedaccess-alpha.VerifiedEmail"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-verifiedaccess-alpha.VerifiedEmail.REQUIRED">REQUIRED</a></code> | *No description.* |
| <code><a href="#aws-verifiedaccess-alpha.VerifiedEmail.NOT_REQUIRED">NOT_REQUIRED</a></code> | *No description.* |

---

##### `REQUIRED` <a name="REQUIRED" id="aws-verifiedaccess-alpha.VerifiedEmail.REQUIRED"></a>

---


##### `NOT_REQUIRED` <a name="NOT_REQUIRED" id="aws-verifiedaccess-alpha.VerifiedEmail.NOT_REQUIRED"></a>

---

