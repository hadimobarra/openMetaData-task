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
 * This schema defines the Authentication Configuration.
 */
export interface AuthenticationConfiguration {
    /**
     * Authentication Authority
     */
    authority: string;
    /**
     * Callback URL
     */
    callbackUrl: string;
    /**
     * Client ID
     */
    clientId: string;
    /**
     * Enable Self Sign Up
     */
    enableSelfSignup?: boolean;
    /**
     * Jwt Principal Claim
     */
    jwtPrincipalClaims: string[];
    /**
     * LDAP Configuration in case the Provider is LDAP
     */
    ldapConfiguration?: LDAPConfiguration;
    /**
     * SSO provider: no-auth, okta, google, azure, auth0, custom-oidc, aws-cognito, ldap, saml,
     * etc.
     */
    provider: string;
    /**
     * Custom OIDC Authentication Provider Name
     */
    providerName: string;
    /**
     * List of Public Key URLs
     */
    publicKeyUrls: string[];
    /**
     * Saml Configuration that is applicable only when the provider is Saml
     */
    samlConfiguration?: SamlSSOClientConfig;
}

/**
 * LDAP Configuration in case the Provider is LDAP
 *
 * LDAP Configuration
 */
export interface LDAPConfiguration {
    /**
     * Password for LDAP Admin
     */
    dnAdminPassword: string;
    /**
     * Distinguished Admin name with search capabilities
     */
    dnAdminPrincipal: string;
    /**
     * LDAP server address without scheme(Example :- localhost)
     */
    host: string;
    /**
     * If enable need to give full dn to login
     */
    isFullDn?: boolean;
    /**
     * Email attribute name
     */
    mailAttributeName: string;
    /**
     * No of connection to create the pool with
     */
    maxPoolSize?: number;
    /**
     * Port of the server
     */
    port: number;
    /**
     * LDAPS (secure LDAP) or LDAP
     */
    sslEnabled?: boolean;
    /**
     * Truststore Configuration
     */
    trustStoreConfig?: TruststoreConfig;
    /**
     * Truststore Type e.g. TrustAll, HostName, JVMDefault, CustomTrustStore.
     */
    truststoreConfigType?: TruststoreConfigType;
    /**
     * Truststore format e.g. PKCS12, JKS.
     */
    truststoreFormat?: string;
    /**
     * User base distinguished name
     */
    userBaseDN: string;
}

/**
 * Truststore Configuration
 */
export interface TruststoreConfig {
    /**
     * CustomTrust Configuration
     */
    customTrustManagerConfig?: CustomTrustManagerConfig;
    /**
     * HostName Configuration
     */
    hostNameConfig?: HostNameConfig;
    /**
     * JVMDefault Configuration
     */
    jvmDefaultConfig?: JVMDefaultConfig;
    /**
     * TrustAll Configuration
     */
    trustAllConfig?: TrustAllConfig;
}

/**
 * CustomTrust Configuration
 */
export interface CustomTrustManagerConfig {
    /**
     * Examine validity dates of certificate
     */
    examineValidityDates?: boolean;
    /**
     * Truststore file format
     */
    trustStoreFileFormat?: string;
    /**
     * Truststore file password
     */
    trustStoreFilePassword?: string;
    /**
     * Truststore file path
     */
    trustStoreFilePath?: string;
    /**
     * list of host names to verify
     */
    verifyHostname?: boolean;
}

/**
 * HostName Configuration
 */
export interface HostNameConfig {
    /**
     * list of acceptable host names
     */
    acceptableHostNames?: string[];
    /**
     * Allow wildcards
     */
    allowWildCards?: boolean;
}

/**
 * JVMDefault Configuration
 */
export interface JVMDefaultConfig {
    /**
     * list of host names to verify
     */
    verifyHostname?: boolean;
}

/**
 * TrustAll Configuration
 */
export interface TrustAllConfig {
    /**
     * Examine validity dates of certificate
     */
    examineValidityDates?: boolean;
}

/**
 * Truststore Type e.g. TrustAll, HostName, JVMDefault, CustomTrustStore.
 */
export enum TruststoreConfigType {
    CustomTrustStore = "CustomTrustStore",
    HostName = "HostName",
    JVMDefault = "JVMDefault",
    TrustAll = "TrustAll",
}

/**
 * Saml Configuration that is applicable only when the provider is Saml
 *
 * SAML SSO client security configs.
 */
export interface SamlSSOClientConfig {
    /**
     * Get logs from the Library in debug mode
     */
    debugMode?: boolean;
    idp:        Idp;
    security?:  Security;
    sp:         SP;
}

/**
 * This schema defines defines the identity provider config.
 */
export interface Idp {
    /**
     * Authority URL to redirect the users on Sign In page
     */
    authorityUrl?: string;
    /**
     * Identity Provider Entity ID usually same as the SSO login URL.
     */
    entityId: string;
    /**
     * X509 Certificate
     */
    idpX509Certificate?: string;
    /**
     * Authority URL to redirect the users on Sign In page
     */
    nameId?: string;
    /**
     * SSO Login URL.
     */
    ssoLoginUrl: string;
}

/**
 * This schema defines defines the security config for SAML.
 */
export interface Security {
    /**
     * KeyStore Alias
     */
    keyStoreAlias?: string;
    /**
     * KeyStore File Path
     */
    keyStoreFilePath?: string;
    /**
     * KeyStore Password
     */
    keyStorePassword?: string;
    /**
     * Encrypt Name Id while sending requests from SP.
     */
    sendEncryptedNameId?: boolean;
    /**
     * Sign the Authn Request while sending.
     */
    sendSignedAuthRequest?: boolean;
    /**
     * Want the Metadata of this SP to be signed.
     */
    signSpMetadata?: boolean;
    /**
     * Only accept valid signed and encrypted assertions if the relevant flags are set
     */
    strictMode?: boolean;
    /**
     * Validity for the JWT Token created from SAML Response
     */
    tokenValidity?: number;
    /**
     * SP requires the assertion received to be encrypted.
     */
    wantAssertionEncrypted?: boolean;
    /**
     * SP requires the assertions received to be signed.
     */
    wantAssertionsSigned?: boolean;
    /**
     * SP requires the messages received to be signed.
     */
    wantMessagesSigned?: boolean;
    /**
     * SP requires the Name Id received to be encrypted.
     */
    wantNameIdEncrypted?: boolean;
}

/**
 * This schema defines defines the identity provider config.
 */
export interface SP {
    /**
     * Assertion Consumer URL.
     */
    acs: string;
    /**
     * Service Provider Entity ID usually same as the SSO login URL.
     */
    callback: string;
    /**
     * Service Provider Entity ID.
     */
    entityId: string;
    /**
     * Sp Private Key for Signing and Encryption Only
     */
    spPrivateKey?: string;
    /**
     * X509 Certificate
     */
    spX509Certificate?: string;
}
